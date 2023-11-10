<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit;

use MissionControlBackend\ActionResultResponseFactory;
use MissionControlBackend\Http\ApplyRoutesEvent;
use MissionControlBackend\Http\JsonResponse\JsonResponder;
use MissionControlIdp\Authorize\ResourceServerMiddlewareWrapper;
use MissionControlIdp\IdentityManagement\Identity;
use MissionControlTickets\Tickets\CreateEdit\PostedData\CreatePostedData;
use MissionControlTickets\Tickets\CreateEdit\PostedData\Watcher as PostedWatcher;
use MissionControlTickets\Tickets\Ticket\AssignedToUserId;
use MissionControlTickets\Tickets\Ticket\Content;
use MissionControlTickets\Tickets\Ticket\CreatedByUserId;
use MissionControlTickets\Tickets\Ticket\NewTicket;
use MissionControlTickets\Tickets\Ticket\Title;
use MissionControlTickets\Tickets\Ticket\Watcher;
use MissionControlTickets\Tickets\Ticket\Watchers;
use MissionControlTickets\Tickets\TicketRepository;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use function assert;
use function is_array;

readonly class PutCreateTicketAction
{
    public static function registerRoute(ApplyRoutesEvent $event): void
    {
        $event->put('/tickets', self::class)
            ->add(ResourceServerMiddlewareWrapper::class);
    }

    public function __construct(
        private JsonResponder $jsonResponder,
        private TicketRepository $repository,
        private CreatePostedData $createPostedData,
        private ActionResultResponseFactory $responseFactory,
    ) {
    }

    public function __invoke(ServerRequestInterface $request): ResponseInterface
    {
        $identity = $request->getAttribute('identity');
        assert($identity instanceof Identity);

        $rawPostData = $request->getParsedBody();
        assert(is_array($rawPostData));

        $postedData = $this->createPostedData->fromRawPostData(
            $rawPostData,
        );

        return $this->jsonResponder->respond(
            $this->responseFactory->createResponse(
                $this->repository->create(
                    new NewTicket(
                        AssignedToUserId::fromNative(
                            $postedData->assignedTo->toNative(),
                        ),
                        new Watchers(
                            /** @phpstan-ignore-next-line */
                            $postedData->additionalWatchers->map(
                                static fn (
                                    PostedWatcher $w,
                                ) => Watcher::fromNative($w->toNative())
                            ),
                        ),
                        Title::fromNative(
                            $postedData->title->toNative(),
                        ),
                        Content::fromNative(
                            $postedData->content->toNative(),
                        ),
                        CreatedByUserId::fromNative(
                            $identity->id->toNative(),
                        ),
                    ),
                ),
            ),
        );
    }
}
