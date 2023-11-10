<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit\PostedData;

use Funeralzone\ValueObjectExtensions\ComplexScalars\UUIDTrait;
use Funeralzone\ValueObjects\ValueObject;
use InvalidArgumentException;
use Ramsey\Uuid\Uuid;

use function is_string;

// phpcs:disable SlevomatCodingStandard.TypeHints.ParameterTypeHint.MissingNativeTypeHint

class AssignedTo implements ValueObject
{
    use UUIDTrait;

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
                'Assigned To must not be empty',
            );
        }

        $uuid = Uuid::fromString($native);

        return new self($uuid);
    }
}
