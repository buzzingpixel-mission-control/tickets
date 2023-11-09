"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Page_1 = __importDefault(require("./Tickets/Page"));
var PageCreate_1 = __importDefault(require("./Tickets/CreateEdit/PageCreate"));
var TicketsRoutes = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: "/tickets", element: react_1.default.createElement(Page_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/tickets/page/:pageNum", element: react_1.default.createElement(Page_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/tickets/create", element: react_1.default.createElement(PageCreate_1.default, null) }))); };
exports.default = TicketsRoutes;
