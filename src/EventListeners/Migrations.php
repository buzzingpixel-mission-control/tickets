<?php

declare(strict_types=1);

namespace MissionControlTickets\EventListeners;

use MissionControlBackend\Persistence\Migrations\AddMigrationPathsEvent;
use MissionControlTickets\TicketsSrc;

class Migrations
{
    public function onAddMigrationPaths(AddMigrationPathsEvent $event): void
    {
        $event->paths->addPathFromString(
            TicketsSrc::path() . '/Migrations',
        );
    }
}
