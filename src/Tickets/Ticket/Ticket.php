<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Ticket;

readonly class Ticket
{
    public function __construct(
        public Id $id,
        public CreatedByUserId $createdByUserId,
        public AssignedToUserId $assignedToUserId,
        public Title $title,
        public Content $content,
        public Status $status,
        public Watchers $watchers,
        public AddedAt $addedAt,
    ) {
    }

    /** @return array<string, scalar|array<array-key, array<string, scalar|null>>|null> */
    public function asArray(): array
    {
        return [
            'id' => $this->id->toNative(),
            'createdByUserId' => $this->createdByUserId->toNative(),
            'assignedToUserId' => $this->assignedToUserId->toNative(),
            'title' => $this->title->toNative(),
            'content' => $this->content->toNative(),
            'status' => $this->status->value,
            'watchers' => $this->watchers->asArray(),
            'addedAt' => $this->addedAt->toNative(),
        ];
    }
}
