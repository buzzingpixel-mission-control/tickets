"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var editor_1 = require("@mdxeditor/editor");
// Only import this to the next file
function InitializedMDXEditor(_a) {
    var editorRef = _a.editorRef, props = __rest(_a, ["editorRef"]);
    return (react_1.default.createElement(editor_1.MDXEditor, __assign({ plugins: [
            // Example Plugin Usage
            (0, editor_1.headingsPlugin)(),
            (0, editor_1.listsPlugin)(),
            (0, editor_1.quotePlugin)(),
            (0, editor_1.thematicBreakPlugin)(),
            (0, editor_1.markdownShortcutPlugin)(),
        ] }, props, { ref: editorRef })));
}
exports.default = InitializedMDXEditor;
