<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use MissionControlBackend\Persistence\Record;

// phpcs:disable Squiz.NamingConventions.ValidVariableName.MemberNotCamelCaps

class TicketRecord extends Record
{
    public static function getTableName(): string
    {
        return TicketsTable::TABLE_NAME;
    }

    public function tableName(): string
    {
        return TicketsTable::TABLE_NAME;
    }

    /** Primary key */
    public string $id = '';

    public string|null $created_by_user_id = null;

    public string|null $assigned_to_user_id = null;

    public string $title = '';

    public string $content = '';

    public string $status = '';

    public string $watchers = '[]';

    public string $added_at = '';
}
