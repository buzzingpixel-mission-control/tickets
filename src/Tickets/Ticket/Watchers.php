<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

use function array_map;
use function array_values;
use function json_encode;

class Watchers
{
    /** @var Watcher[] */
    public array $entities;

    /** @param Watcher[] $entities */
    public function __construct(array $entities = [])
    {
        $this->entities = array_values(array_map(
            static fn (Watcher $e) => $e,
            $entities,
        ));
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
            static fn (Watcher $e) => $e->toNative(),
        );
    }

    public function asJson(): string
    {
        return (string) json_encode($this->asArray());
    }
}
