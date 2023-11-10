<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

use Funeralzone\ValueObjects\ValueObject;
use MissionControlBackend\Persistence\ValueObjects\DbDateTime;

class AddedAt implements ValueObject
{
    use DbDateTime;
}
