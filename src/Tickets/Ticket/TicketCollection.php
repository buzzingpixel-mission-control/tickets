<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

use RuntimeException;

use function array_map;
use function array_values;

class TicketCollection
{
    /** @var Ticket[] */
    public array $entities;

    /** @param Ticket[] $entities */
    public function __construct(array $entities = [])
    {
        $this->entities = array_values(array_map(
            static fn (Ticket $e) => $e,
            $entities,
        ));
    }

    public function first(): Ticket
    {
        $entity = $this->firstOrNull();

        if ($entity === null) {
            throw new RuntimeException('No Ticket found');
        }

        return $entity;
    }

    public function firstOrNull(): Ticket|null
    {
        return $this->entities[0] ?? null;
    }

    /** @return mixed[] */
    public function map(callable $callback): array
    {
        return array_values(array_map(
            $callback,
            $this->entities,
        ));
    }

    /** @return array<array-key, array<string, scalar|null>> */
    public function asArray(): array
    {
        /** @phpstan-ignore-next-line */
        return $this->map(
            static fn (Ticket $e) => $e->asArray(),
        );
    }
}
