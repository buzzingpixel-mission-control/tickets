"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var buzzingpixel_mission_control_frontend_core_1 = require("buzzingpixel-mission-control-frontend-core");
var PageNumberWrapper = function (_a) {
    var pageNum = _a.pageNum, children = _a.children;
    if (pageNum === undefined) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
    if (Number.isNaN(pageNum) || pageNum.toString().split('.').length > 1) {
        return react_1.default.createElement(buzzingpixel_mission_control_frontend_core_1.NotFoundPage, null);
    }
    if (typeof pageNum === 'string') {
        pageNum = parseInt(pageNum, 10);
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = PageNumberWrapper;
