"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var buzzingpixel_mission_control_frontend_core_1 = require("buzzingpixel-mission-control-frontend-core");
var react_select_1 = __importDefault(require("react-select"));
var FormInputAssignedTo = function (_a) {
    var _b = _a.value, value = _b === void 0 ? [] : _b, setValue = _a.setValue;
    var _c = (0, buzzingpixel_mission_control_frontend_core_1.useUsersData)(), status = _c.status, data = _c.data;
    var options = [];
    if (status === 'success') {
        data.forEach(function (user) {
            var label = user.emailAddress;
            if (user.name) {
                label += " (".concat(user.name, ")");
            }
            options.push({
                value: user.id,
                label: label,
            });
        });
    }
    var selectionOptions = options.filter(function (option) { return value.indexOf(option.value) > -1; });
    return (react_1.default.createElement("div", null, (function () {
        if (status === 'loading') {
            return (react_1.default.createElement("div", { className: "inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-100 text-cyan-600", role: "status" },
                react_1.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")));
        }
        return (react_1.default.createElement(react_select_1.default, { id: "project_id", onChange: function (selected) {
                setValue(selected.map(function (option) { return (option.value); }));
            }, value: selectionOptions, options: options, className: "react-select-control", isClearable: true, isMulti: true }));
    })()));
};
FormInputAssignedTo.defaultProps = {
    value: [],
};
exports.default = FormInputAssignedTo;
