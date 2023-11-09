"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var buzzingpixel_mission_control_frontend_core_1 = require("buzzingpixel-mission-control-frontend-core");
var CreateEditTicket_1 = __importDefault(require("./CreateEditTicket"));
var PageCreate = function () {
    var pageTitle = 'Create Ticket';
    (0, buzzingpixel_mission_control_frontend_core_1.useHidePageTitle)(true);
    (0, buzzingpixel_mission_control_frontend_core_1.usePageTitle)(pageTitle);
    (0, buzzingpixel_mission_control_frontend_core_1.useBreadcrumbs)([
        {
            name: 'Tickets',
            href: '/tickets',
        },
        {
            name: pageTitle,
            href: '/tickets/create',
        },
    ]);
    return (react_1.default.createElement(CreateEditTicket_1.default, { pageTitle: pageTitle }));
};
exports.default = PageCreate;
