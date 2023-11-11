<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\GetTickets\QueryParams;

class CreateQueryParams
{
    /** @param array<array-key, scalar> $data */
    public function fromRawQueryArray(array $data): QueryParams
    {
        return new QueryParams(
            Status::from((string) ($data['status'] ?? 'none')),
            Filter::fromNative((string) ($data['filter'] ?? 'none')),
        );
    }
}
