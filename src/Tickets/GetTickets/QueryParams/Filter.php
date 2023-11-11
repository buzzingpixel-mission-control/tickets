<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\GetTickets\QueryParams;

use Funeralzone\ValueObjects\Scalars\StringTrait;
use Funeralzone\ValueObjects\ValueObject;

// phpcs:disable SlevomatCodingStandard.TypeHints.ParameterTypeHint.MissingNativeTypeHint

class Filter implements ValueObject
{
    use StringTrait;
}
