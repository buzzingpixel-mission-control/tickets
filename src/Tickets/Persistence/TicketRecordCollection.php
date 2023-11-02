<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use RuntimeException;

use function array_map;
use function array_values;
use function count;

class TicketRecordCollection
{
    /** @var TicketRecord[] */
    public array $records;

    /** @param TicketRecord[] $records */
    public function __construct(array $records = [])
    {
        $this->records = array_values(array_map(
            static fn (TicketRecord $r) => $r,
            $records,
        ));
    }

    public function first(): TicketRecord
    {
        $record = $this->firstOrNull();

        if ($record === null) {
            throw new RuntimeException('No Pipeline record found');
        }

        return $record;
    }

    public function firstOrNull(): TicketRecord|null
    {
        return $this->records[0] ?? null;
    }

    /** @return mixed[] */
    public function map(callable $callback): array
    {
        return array_values(array_map(
            $callback,
            $this->records,
        ));
    }

    public function count(): int
    {
        return count($this->records);
    }
}
