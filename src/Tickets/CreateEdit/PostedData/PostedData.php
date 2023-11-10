<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\CreateEdit\PostedData;

readonly class PostedData
{
    public function __construct(
        public AssignedTo $assignedTo,
        public AdditionalWatchers $additionalWatchers,
        public Title $title,
        public Content $content,
    ) {
    }
}
