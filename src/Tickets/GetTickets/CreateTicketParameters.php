<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\GetTickets;

use MissionControlBackend\Persistence\Sort;
use MissionControlTickets\Tickets\GetTickets\QueryParams\QueryParams;
use MissionControlTickets\Tickets\GetTickets\QueryParams\Status;
use MissionControlTickets\Tickets\Persistence\FindTicketParameters;

readonly class CreateTicketParameters
{
    public function create(QueryParams $queryParams): FindTicketParameters
    {
        $parameters = FindTicketParameters::create()
            ->withOrderBy('added_at')
            ->withSort(Sort::DESC);

        if ($queryParams->status !== Status::NONE) {
            $parameters = $parameters->withStatus(
                $queryParams->status->value,
            );
        }

        if ($queryParams->filter->toNative() !== '') {
            // todo, figure out search
        }

        return $parameters;
    }
}
