<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets;

use MissionControlBackend\ActionResult;
use MissionControlTickets\Tickets\Persistence\CreateTicket;
use MissionControlTickets\Tickets\Persistence\TicketRecordFromNewEntity;
use MissionControlTickets\Tickets\Ticket\NewTicket;

readonly class TicketRepository
{
    public function __construct(
        private CreateTicket $createTicket,
        private TicketRecordFromNewEntity $ticketRecordFromNewEntity,
    ) {
    }

    public function create(NewTicket $entity): ActionResult
    {
        return $this->createTicket->create(
            $this->ticketRecordFromNewEntity->create($entity),
        );
    }
}
