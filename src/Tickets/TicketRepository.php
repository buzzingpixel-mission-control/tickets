<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets;

use MissionControlBackend\ActionResult;
use MissionControlTickets\Tickets\Persistence\CreateTicket;
use MissionControlTickets\Tickets\Persistence\FindTicketParameters;
use MissionControlTickets\Tickets\Persistence\FindTickets;
use MissionControlTickets\Tickets\Persistence\TicketEntityFromRecord;
use MissionControlTickets\Tickets\Persistence\TicketRecord;
use MissionControlTickets\Tickets\Persistence\TicketRecordFromNewEntity;
use MissionControlTickets\Tickets\Ticket\NewTicket;
use MissionControlTickets\Tickets\Ticket\TicketCollection;

readonly class TicketRepository
{
    public function __construct(
        private FindTickets $find,
        private CreateTicket $create,
        private TicketRecordFromNewEntity $recordFromNewEntity,
        private TicketEntityFromRecord $ticketEntityFromRecord,
    ) {
    }

    public function create(NewTicket $entity): ActionResult
    {
        return $this->create->create(
            $this->recordFromNewEntity->create($entity),
        );
    }

    public function findAll(
        FindTicketParameters|null $parameters = null,
    ): TicketCollection {
        $records = $this->find->findAll($parameters);

        /** @phpstan-ignore-next-line */
        return new TicketCollection($records->map(
            fn (
                TicketRecord $record,
            ) => $this->ticketEntityFromRecord->create($record),
        ));
    }
}
