<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

use Funeralzone\ValueObjectExtensions\ComplexScalars\UUIDTrait;
use Funeralzone\ValueObjects\ValueObject;

class AssignedToUserId implements ValueObject
{
    use UUIDTrait;
}
