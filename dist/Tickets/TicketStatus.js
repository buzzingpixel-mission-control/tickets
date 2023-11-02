"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketStatusList = exports.TicketStatusReadable = exports.TicketStatus = void 0;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["new"] = "new";
    TicketStatus["inProgress"] = "inProgress";
    TicketStatus["onHold"] = "onHold";
    TicketStatus["resolved"] = "resolved";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
var TicketStatusReadable;
(function (TicketStatusReadable) {
    TicketStatusReadable["new"] = "New";
    TicketStatusReadable["inProgress"] = "In Progress";
    TicketStatusReadable["onHold"] = "On Hold";
    TicketStatusReadable["resolved"] = "Resolved";
})(TicketStatusReadable || (exports.TicketStatusReadable = TicketStatusReadable = {}));
exports.ticketStatusList = [
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
