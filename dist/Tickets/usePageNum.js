"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var usePageNum = function () {
    var pageNum = (0, react_router_dom_1.useParams)().pageNum;
    console.log(pageNum);
};
exports.default = usePageNum;
