<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit\PostedData;

use RuntimeException;

use function array_map;
use function is_array;
use function is_scalar;

class CreatePostedData
{
    /** @param array<array-key, scalar|array<array-key, scalar|null>|null> $data */
    public function fromRawPostData(array $data): PostedData
    {
        $title = $data['title'];
        $title = (string) (is_scalar($title) ? $title : '');

        $assignedTo = $data['assigned_to'];
        $assignedTo = (string) (is_scalar($assignedTo) ? $assignedTo : '');

        $additionalWatchers = $data['additional_watchers'];

        if (! is_array($additionalWatchers)) {
            throw new RuntimeException(
                'additional_watchers must be array',
            );
        }

        $content = $data['content'];
        $content = (string) (is_scalar($content) ? $content : '');

        return new PostedData(
            AssignedTo::fromNative($assignedTo),
            new AdditionalWatchers(array_map(
                static fn (string $watcherId) => Watcher::fromNative(
                    $watcherId,
                ),
                $additionalWatchers,
            )),
            Title::fromNative($title),
            Content::fromNative($content),
        );
    }
}
