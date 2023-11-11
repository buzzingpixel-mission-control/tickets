<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\GetTickets\QueryParams;

readonly class QueryParams
{
    public function __construct(
        public Status $status,
        public Filter $filter,
    ) {
    }
}
