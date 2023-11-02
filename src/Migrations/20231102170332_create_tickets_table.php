<?php

declare(strict_types=1);

use MissionControlBackend\Persistence\Migrations\ChangeMigration;
use MissionControlTickets\Tickets\Persistence\TicketsTable;

/** @noinspection PhpUnused */
/** @noinspection PhpIllegalPsrClassPathInspection */
// phpcs:disable PSR1.Classes.ClassDeclaration.MissingNamespace, Squiz.Classes.ClassFileName.NoMatch

class CreateTicketsTable extends ChangeMigration
{
    public function change(): void
    {
        TicketsTable::createSchema($this)->create();
    }
}
