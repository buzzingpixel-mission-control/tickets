"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var PageNumberWrapper_1 = __importDefault(require("./PageNumberWrapper"));
var TicketsListPage_1 = __importDefault(require("./TicketsListPage"));
var Page = function () {
    var pageNum = (0, react_router_dom_1.useParams)().pageNum;
    var pageNumInt = parseInt(pageNum, 10);
    if (Number.isNaN(pageNumInt)) {
        pageNumInt = 1;
    }
    return (react_1.default.createElement(PageNumberWrapper_1.default, { pageNum: pageNum },
        react_1.default.createElement(TicketsListPage_1.default, { pageNum: pageNumInt })));
};
exports.default = Page;
