<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

readonly class NewTicket
{
    public function __construct(
        public AssignedToUserId $assignedToUserId,
        public Watchers $watchers,
        public Title $title,
        public Content $content,
        public CreatedByUserId $createdByUserId,
    ) {
    }
}
