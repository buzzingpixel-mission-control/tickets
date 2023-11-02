"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var buzzingpixel_mission_control_frontend_core_1 = require("buzzingpixel-mission-control-frontend-core");
var PageHeader_1 = __importDefault(require("./PageHeader"));
var TicketList_1 = __importDefault(require("./TicketList"));
var TicketsListPage = function (_a) {
    var pageNum = _a.pageNum;
    var pageTitle = 'Tickets';
    var breadcrumbs = [];
    if (pageNum > 1) {
        pageTitle += "| Page ".concat(pageNum);
        breadcrumbs = [
            {
                name: 'Tickets',
                href: '/tickets',
            },
            {
                name: "Page ".concat(pageNum),
                href: "/tickets/page/".concat(pageNum),
            },
        ];
    }
    (0, buzzingpixel_mission_control_frontend_core_1.usePageTitle)(pageTitle);
    (0, buzzingpixel_mission_control_frontend_core_1.useHidePageTitle)(true);
    (0, buzzingpixel_mission_control_frontend_core_1.useBreadcrumbs)(breadcrumbs);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PageHeader_1.default, { pageTitle: pageTitle }),
        react_1.default.createElement(TicketList_1.default, { pageNum: pageNum })));
};
exports.default = TicketsListPage;
