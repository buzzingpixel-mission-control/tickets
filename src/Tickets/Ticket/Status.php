<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

enum Status: string
{
    case NEW         = 'new';
    case IN_PROGRESS = 'inProgress';
    case ON_HOLD     = 'onHold';
    case RESOLVED    = 'resolved';
}
