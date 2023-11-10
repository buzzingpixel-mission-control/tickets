<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

use Funeralzone\ValueObjects\Scalars\StringTrait;
use Funeralzone\ValueObjects\ValueObject;

class Content implements ValueObject
{
    use StringTrait;
}
