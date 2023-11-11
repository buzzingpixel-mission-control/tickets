<?php

declare(strict_types=1);

namespace MissionControlTickets\EventListeners;

use MissionControlBackend\Http\ApiApplyRoutesEvent;
use MissionControlTickets\Tickets\CreateEdit\PutCreateTicketAction;
use MissionControlTickets\Tickets\GetTickets\GetTicketsListAction;

class Routing
{
    public function onApplyRoutes(ApiApplyRoutesEvent $event): void
    {
        GetTicketsListAction::registerRoute($event);
        PutCreateTicketAction::registerRoute($event);
    }
}
