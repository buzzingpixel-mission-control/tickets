<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit\PostedData;

use function array_map;
use function array_values;

class AdditionalWatchers
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
}
