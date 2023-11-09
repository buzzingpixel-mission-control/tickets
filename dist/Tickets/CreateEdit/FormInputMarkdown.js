"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_simplemde_editor_1 = __importDefault(require("react-simplemde-editor"));
require("easymde/dist/easymde.min.css");
var FormInputMarkdown = function (_a) {
    var name = _a.name, _b = _a.value, value = _b === void 0 ? '' : _b, setValue = _a.setValue;
    return (react_1.default.createElement("div", { className: "z-50 relative prose max-w-none" },
        react_1.default.createElement(react_simplemde_editor_1.default, { id: name, value: value, onChange: function (val) { setValue(val); } })));
};
FormInputMarkdown.defaultProps = {
    value: '',
};
exports.default = FormInputMarkdown;
