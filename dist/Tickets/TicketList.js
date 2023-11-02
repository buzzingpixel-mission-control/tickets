"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SelectAllComponent_1 = __importDefault(require("./SelectAllComponent"));
var TicketList = function (_a) {
    var pageNum = _a.pageNum;
    console.log('here');
    // return <PartialPageLoading />;
    // return (
    //     <NoResultsAddItem
    //         icon={<TicketIcon />}
    //         headline="There are no tickets"
    //     />
    // );
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SelectAllComponent_1.default, null)));
};
exports.default = TicketList;
