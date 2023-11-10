<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

use Funeralzone\ValueObjectExtensions\ComplexScalars\UUIDTrait;
use Funeralzone\ValueObjects\ValueObject;

class CreatedByUserId implements ValueObject
{
    use UUIDTrait;
}
