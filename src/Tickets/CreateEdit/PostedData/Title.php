<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit\PostedData;

use Funeralzone\ValueObjects\Scalars\StringTrait;
use Funeralzone\ValueObjects\ValueObject;
use InvalidArgumentException;

use function is_string;

// phpcs:disable SlevomatCodingStandard.TypeHints.ParameterTypeHint.MissingNativeTypeHint

class Title implements ValueObject
{
    use StringTrait;

    /**
     * @param string $native
     *
     * @phpstan-ignore-next-line
     */
    public static function fromNative($native): self
    {
        if (! is_string($native)) {
            throw new InvalidArgumentException(
                'Can only instantiate this object with a string.',
            );
        }

        if ($native === '') {
            throw new InvalidArgumentException(
                'Title must not be empty',
            );
        }

        return new self($native);
    }
}
