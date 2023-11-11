<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use MissionControlBackend\Persistence\CustomQueryParams;
use MissionControlBackend\Persistence\FetchParameters;
use MissionControlBackend\Persistence\Sort;
use MissionControlBackend\Persistence\StringCollection;

use function array_merge;
use function implode;

readonly class FindTicketParameters extends FetchParameters
{
    public static function create(): self
    {
        return new self();
    }

    public static function getTableName(): string
    {
        return TicketsTable::TABLE_NAME;
    }

    public function tableName(): string
    {
        return TicketsTable::TABLE_NAME;
    }

    public function __construct(
        public StringCollection|null $createdByUserIds = null,
        public StringCollection|null $notCreatedByUserIds = null,
        public StringCollection|null $assignedToUserIds = null,
        public StringCollection|null $notAssignedToUserIds = null,
        public StringCollection|null $statuses = null,
        public StringCollection|null $notStatuses = null,
        StringCollection|null $ids = null,
        StringCollection|null $notIds = null,
        int|null $limit = null,
        int|null $offset = null,
        string|null $orderBy = null,
        Sort|null $sort = null,
    ) {
        parent::__construct(
            $ids,
            $notIds,
            $limit,
            $offset,
            $orderBy,
            $sort,
        );
    }

    public function withCreatedByUserId(string $id): static
    {
        $ids = $this->createdByUserIds ?? new StringCollection();

        return $this->with(createdByUserIds: $ids->withString($id));
    }

    public function withNotCreatedByUserId(string $id): static
    {
        $notIds = $this->notCreatedByUserIds ?? new StringCollection();

        return $this->with(
            notCreatedByUserIds: $notIds->withString($id),
        );
    }

    public function withAssignedToUserId(string $id): static
    {
        $ids = $this->assignedToUserIds ?? new StringCollection();

        return $this->with(assignedToUserIds: $ids->withString($id));
    }

    public function withNotAssignedToyUserId(string $id): static
    {
        $notIds = $this->notAssignedToUserIds ?? new StringCollection();

        return $this->with(
            notAssignedToUserIds: $notIds->withString($id),
        );
    }

    public function withStatus(string $status): static
    {
        $statuses = $this->statuses ?? new StringCollection();

        return $this->with(statuses: $statuses->withString($status));
    }

    public function withNotStatus(string $status): static
    {
        $notStatuses = $this->notStatuses ?? new StringCollection();

        return $this->with(
            notStatuses: $notStatuses->withString($status),
        );
    }

    public function buildQuery(
        callable|null $buildCustomQuerySection = null,
    ): CustomQueryParams {
        $internalCustomQuery = $this->buildInternalCustomQuery();

        if ($buildCustomQuerySection === null) {
            $buildCustomQuerySection = $internalCustomQuery;
        } else {
            $build = $buildCustomQuerySection();

            $buildCustomQuerySection = new CustomQueryParams(
                $build->query . ' ' . $internalCustomQuery->query,
                array_merge(
                    $build->params,
                    $internalCustomQuery->params,
                ),
            );
        }

        return parent::buildQuery(
            static fn () => $buildCustomQuerySection,
        );
    }

    private function buildInternalCustomQuery(): CustomQueryParams
    {
        $params = [];

        $query = [];

        if (
            $this->createdByUserIds !== null &&
            $this->createdByUserIds->count() > 0
        ) {
            $in = [];

            $i = 1;

            $this->createdByUserIds->map(
                static function (string $id) use (
                    &$i,
                    &$in,
                    &$params,
                ): void {
                    $key = 'created_by_user_id_' . $i;

                    $in[] = ':' . $key;

                    $params[$key] = $id;

                    $i++;
                },
            );

            $query[] = 'AND created_by_user_id IN (' .
                implode(',', $in) .
                ')';
        }

        if (
            $this->notCreatedByUserIds !== null &&
            $this->notCreatedByUserIds->count() > 0
        ) {
            $in = [];

            $i = 1;

            $this->notCreatedByUserIds->map(
                static function (string $notId) use (
                    &$i,
                    &$in,
                    &$params,
                ): void {
                    $key = 'not_created_by_user_id_' . $i;

                    $in[] = ':' . $key;

                    $params[$key] = $notId;

                    $i++;
                },
            );

            $query[] = 'AND created_by_user_id NOT IN (' .
                implode(',', $in) .
                ')';
        }

        if (
            $this->assignedToUserIds !== null &&
            $this->assignedToUserIds->count() > 0
        ) {
            $in = [];

            $i = 1;

            $this->assignedToUserIds->map(
                static function (string $id) use (
                    &$i,
                    &$in,
                    &$params,
                ): void {
                    $key = 'assigned_to_user_id_' . $i;

                    $in[] = ':' . $key;

                    $params[$key] = $id;

                    $i++;
                },
            );

            $query[] = 'AND assigned_to_user_id IN (' .
                implode(',', $in) .
                ')';
        }

        if (
            $this->notAssignedToUserIds !== null &&
            $this->notAssignedToUserIds->count() > 0
        ) {
            $in = [];

            $i = 1;

            $this->notAssignedToUserIds->map(
                static function (string $notId) use (
                    &$i,
                    &$in,
                    &$params,
                ): void {
                    $key = 'not_assigned_to_user_id_' . $i;

                    $in[] = ':' . $key;

                    $params[$key] = $notId;

                    $i++;
                },
            );

            $query[] = 'AND assigned_to_user_id NOT IN (' .
                implode(',', $in) .
                ')';
        }

        if (
            $this->statuses !== null &&
            $this->statuses->count() > 0
        ) {
            $in = [];

            $i = 1;

            $this->statuses->map(
                static function (string $status) use (
                    &$i,
                    &$in,
                    &$params,
                ): void {
                    $key = 'status_' . $i;

                    $in[] = ':' . $key;

                    $params[$key] = $status;

                    $i++;
                },
            );

            $query[] = 'AND status IN (' .
                implode(',', $in) .
                ')';
        }

        if (
            $this->notStatuses !== null &&
            $this->notStatuses->count() > 0
        ) {
            $in = [];

            $i = 1;

            $this->notStatuses->map(
                static function (string $notStatus) use (
                    &$i,
                    &$in,
                    &$params,
                ): void {
                    $key = 'not_status_' . $i;

                    $in[] = ':' . $key;

                    $params[$key] = $notStatus;

                    $i++;
                },
            );

            $query[] = 'AND status NOT IN (' .
                implode(',', $in) .
                ')';
        }

        return new CustomQueryParams(
            implode(' ', $query),
            $params,
        );
    }
}
