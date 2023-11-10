<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use MissionControlBackend\Persistence\DateFormats;
use MissionControlBackend\Persistence\UuidFactoryWithOrderedTimeCodec;
use MissionControlTickets\Tickets\Ticket\NewTicket;
use MissionControlTickets\Tickets\Ticket\Status;
use Psr\Clock\ClockInterface;

// phpcs:disable Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps

readonly class TicketRecordFromNewEntity
{
    public function __construct(
        private ClockInterface $clock,
        private UuidFactoryWithOrderedTimeCodec $uuidFactory,
    ) {
    }

    public function create(NewTicket $entity): TicketRecord
    {
        $record = new TicketRecord();

        $record->id = $this->uuidFactory->uuid4()->toString();

        $record->created_by_user_id = $entity->createdByUserId->toNative();

        $record->assigned_to_user_id = $entity->assignedToUserId->toNative();

        $record->title = $entity->title->toNative();

        $record->content = $entity->content->toNative();

        $record->status = Status::NEW->value;

        $record->watchers = $entity->watchers->asJson();

        $record->added_at = $this->clock->now()->format(
            DateFormats::POSTGRES_ISO8601,
        );

        return $record;
    }
}
