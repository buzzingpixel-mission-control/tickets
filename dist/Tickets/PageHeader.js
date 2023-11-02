"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var useQuickStatusFilter_1 = __importDefault(require("./useQuickStatusFilter"));
var TicketStatus_1 = require("./TicketStatus");
var useFilterText_1 = __importDefault(require("./useFilterText"));
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
var PageHeader = function (_a) {
    var pageTitle = _a.pageTitle;
    var _b = (0, useQuickStatusFilter_1.default)(), quickStatusFilter = _b[0], setQuickStatusFilter = _b[1];
    var _c = (0, useFilterText_1.default)(), filterText = _c[0], setFilterText = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "pb-6 lg:flex lg:justify-between" },
            react_1.default.createElement("h1", { className: "text-2xl font-semibold leading-6 text-gray-900 hidden lg:block" }, pageTitle),
            react_1.default.createElement("div", { className: "text-right" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/tickets/create", className: "ml-2 my-1 inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600" }, "Create Ticket"))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "sm:flex sm:mb-4" },
                react_1.default.createElement("div", { className: "mb-4 sm:mb-0 sm:mr-4" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "sm:hidden" },
                            react_1.default.createElement("label", { htmlFor: "statusFilter", className: "sr-only" }, "Select a status filter"),
                            react_1.default.createElement("select", { id: "statusFilter", name: "statusFilter", className: "block w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500", defaultValue: quickStatusFilter, onChange: function (e) {
                                    setQuickStatusFilter(e.target.value);
                                } }, TicketStatus_1.ticketStatusList.map(function (filterStatus) { return (react_1.default.createElement("option", { key: filterStatus.value, value: filterStatus.value }, filterStatus.name)); }))),
                        react_1.default.createElement("div", { className: "hidden sm:block" },
                            react_1.default.createElement("nav", { className: "flex space-x-4", "aria-label": "Status Filter" }, TicketStatus_1.ticketStatusList.map(function (filterStatus) {
                                var isCurrent = filterStatus.value === quickStatusFilter;
                                return (react_1.default.createElement("a", { key: filterStatus.value, href: "#", className: classNames(isCurrent ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium'), "aria-current": isCurrent ? 'page' : undefined, onClick: function (e) {
                                        e.preventDefault();
                                        setQuickStatusFilter(filterStatus.value);
                                    } }, filterStatus.name));
                            }))))),
                react_1.default.createElement("div", { className: "mb-4 sm:mb-0 grow" },
                    react_1.default.createElement("input", { type: "text", name: "filter", id: "filter", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6", placeholder: "Filter results", value: filterText, onChange: function (e) {
                            setFilterText(e.target.value);
                        } }))))));
};
exports.default = PageHeader;
