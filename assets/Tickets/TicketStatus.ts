export enum TicketStatus {
    new = 'new',
    inProgress = 'inProgress',
    onHold = 'onHold',
    resolved = 'resolved',
}

export enum TicketStatusReadable {
    new = 'New',
    inProgress = 'In Progress',
    onHold = 'On Hold',
    resolved = 'Resolved',
}

export const ticketStatusList = [
    {
        name: 'All',
        value: '',
    },
    {
        name: TicketStatusReadable.new,
        value: TicketStatus.new,
    },
    {
        name: TicketStatusReadable.inProgress,
        value: TicketStatus.inProgress,
    },
    {
        name: TicketStatusReadable.onHold,
        value: TicketStatus.onHold,
    },
    {
        name: TicketStatusReadable.resolved,
        value: TicketStatus.resolved,
    },
];
