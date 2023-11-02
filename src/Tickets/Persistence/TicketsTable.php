<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use Phinx\Db\Adapter\PostgresAdapter;
use Phinx\Db\Table;
use Phinx\Migration\MigrationInterface;

class TicketsTable
{
    public const TABLE_NAME = 'tickets';

    public static function createSchema(MigrationInterface $migration): Table
    {
        return $migration->table(
            self::TABLE_NAME,
            [
                'id' => false,
                'primary_key' => ['id'],
            ],
        )
            ->addColumn(
                'id',
                PostgresAdapter::PHINX_TYPE_UUID,
            )
            ->addColumn(
                'created_by_user_id',
                PostgresAdapter::PHINX_TYPE_UUID,
                ['null' => true],
            )
            ->addColumn(
                'assigned_to_user_id',
                PostgresAdapter::PHINX_TYPE_UUID,
                ['null' => true],
            )
            ->addColumn(
                'title',
                PostgresAdapter::PHINX_TYPE_TEXT,
            )
            ->addColumn(
                'content',
                PostgresAdapter::PHINX_TYPE_TEXT,
            )
            ->addColumn(
                'status',
                PostgresAdapter::PHINX_TYPE_STRING,
            )
            ->addColumn(
                'watchers',
                PostgresAdapter::PHINX_TYPE_JSON,
            )
            ->addColumn(
                'added_at',
                PostgresAdapter::PHINX_TYPE_DATETIME,
            );
    }
}
