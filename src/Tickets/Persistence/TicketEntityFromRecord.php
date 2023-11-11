<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use MissionControlTickets\Tickets\Ticket\AddedAt;
use MissionControlTickets\Tickets\Ticket\AssignedToUserId;
use MissionControlTickets\Tickets\Ticket\Content;
use MissionControlTickets\Tickets\Ticket\CreatedByUserId;
use MissionControlTickets\Tickets\Ticket\Id;
use MissionControlTickets\Tickets\Ticket\Status;
use MissionControlTickets\Tickets\Ticket\Ticket;
use MissionControlTickets\Tickets\Ticket\Title;
use MissionControlTickets\Tickets\Ticket\Watcher;
use MissionControlTickets\Tickets\Ticket\Watchers;

use function array_map;
use function is_array;
use function json_decode;

// phpcs:disable Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps

class TicketEntityFromRecord
{
    public function create(TicketRecord $record): Ticket
    {
        $watchers = json_decode($record->watchers);

        $watchers = is_array($watchers) ? $watchers : [];

        return new Ticket(
            Id::fromNative($record->id),
            CreatedByUserId::fromNative(
                $record->created_by_user_id,
            ),
            AssignedToUserId::fromNative(
                $record->assigned_to_user_id,
            ),
            Title::fromNative($record->title),
            Content::fromNative($record->content),
            Status::from($record->status),
            new Watchers(array_map(
                static fn (string $watcherId) => Watcher::fromNative(
                    $watcherId,
                ),
                $watchers,
            )),
            AddedAt::fromNative($record->added_at),
        );
    }
}
