<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\GetTickets\QueryParams;

enum Status: string
{
    case NONE        = 'none';
    case NEW         = 'new';
    case IN_PROGRESS = 'inProgress';
    case ON_HOLD     = 'onHold';
    case RESOLVED    = 'resolved';
}
