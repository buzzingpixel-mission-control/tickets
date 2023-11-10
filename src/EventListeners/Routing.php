<?php

declare(strict_types=1);

namespace MissionControlTickets\EventListeners;

use MissionControlBackend\Http\ApiApplyRoutesEvent;
use MissionControlTickets\Tickets\CreateEdit\PutCreateTicketAction;

class Routing
{
    public function onApplyRoutes(ApiApplyRoutesEvent $event): void
    {
        PutCreateTicketAction::registerRoute($event);
    }
}
