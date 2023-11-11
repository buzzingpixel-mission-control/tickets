<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\GetTickets;

use MissionControlBackend\Http\ApplyRoutesEvent;
use MissionControlIdp\Authorize\ResourceServerMiddlewareWrapper;
use MissionControlTickets\Tickets\GetTickets\QueryParams\CreateQueryParams;
use MissionControlTickets\Tickets\TicketRepository;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use function json_encode;

use const JSON_PRETTY_PRINT;

readonly class GetTicketsListAction
{
    public static function registerRoute(ApplyRoutesEvent $event): void
    {
        $event->get('/tickets', self::class)
            ->add(ResourceServerMiddlewareWrapper::class);
    }

    public function __construct(
        private TicketRepository $repository,
        private CreateQueryParams $createQueryParams,
        private CreateTicketParameters $createTicketParameters,
    ) {
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
    ): ResponseInterface {
        $tickets = $this->repository->findAll(
            $this->createTicketParameters->create(
                $this->createQueryParams->fromRawQueryArray(
                    $request->getQueryParams(),
                ),
            ),
        );

        $response = $response->withHeader(
            'Content-type',
            'application/json',
        );

        $response->getBody()->write((string) json_encode(
            $tickets->asArray(),
            JSON_PRETTY_PRINT,
        ));

        return $response;
    }
}
