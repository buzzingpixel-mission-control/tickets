<?php

declare(strict_types=1);

namespace MissionControlTickets\Tickets\Persistence;

use MissionControlBackend\Persistence\MissionControlPdo;
use PDO;
use PDOException;

readonly class FindTickets
{
    public function __construct(private MissionControlPdo $pdo)
    {
    }

    public function findAll(
        FindTicketParameters|null $parameters = null,
    ): TicketRecordCollection {
        try {
            $parameters ??= new FindTicketParameters();

            $customQuery = $parameters->buildQuery();

            $statement = $this->pdo->prepare($customQuery->query);

            $statement->execute($customQuery->params);

            $results = $statement->fetchAll(
                PDO::FETCH_CLASS,
                TicketRecord::class,
            );

            return new TicketRecordCollection(
                $results !== false ? $results : [],
            );
        } catch (PDOException) {
            // Annoyingly, an invalidly formatted UUID will cause a PDO
            // exception
            return new TicketRecordCollection();
        }
    }
}
