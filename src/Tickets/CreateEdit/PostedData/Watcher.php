<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit\PostedData;

use Funeralzone\ValueObjectExtensions\ComplexScalars\UUIDTrait;
use Funeralzone\ValueObjects\ValueObject;

class Watcher implements ValueObject
{
    use UUIDTrait;
}
