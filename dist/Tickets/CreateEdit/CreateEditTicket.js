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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var buzzingpixel_mission_control_frontend_core_1 = require("buzzingpixel-mission-control-frontend-core");
var ErrorModal_1 = __importDefault(require("./ErrorModal"));
var ShowLastErrorButton_1 = __importDefault(require("./ShowLastErrorButton"));
var SubmitButton_1 = __importDefault(require("./SubmitButton"));
var LineItem_1 = __importDefault(require("./LineItem"));
var FormInputText_1 = __importDefault(require("./FormInputText"));
var FormInputAssignedTo_1 = __importDefault(require("./FormInputAssignedTo"));
var FormInputAdditionalWatchers_1 = __importDefault(require("./FormInputAdditionalWatchers"));
var CreateEditTicket = function (_a) {
    var pageTitle = _a.pageTitle, incomingValues = _a.incomingValues;
    incomingValues = incomingValues !== null && incomingValues !== void 0 ? incomingValues : {
        title: '',
        assigned_to: '',
        additional_watchers: [],
    };
    var _b = (0, react_1.useState)(false), isSaving = _b[0], setIsSaving = _b[1];
    var _c = (0, react_1.useState)(incomingValues), values = _c[0], setValues = _c[1];
    var setStringValue = function (key, val) {
        var newValues = values;
        newValues[key] = val;
        setValues(function () { return (__assign({}, newValues)); });
    };
    var setArrayStringValue = function (key, val) {
        var newValues = values;
        newValues[key] = val;
        setValues(function () { return (__assign({}, newValues)); });
    };
    var _d = (0, react_1.useState)(''), errorMessage = _d[0], setErrorMessage = _d[1];
    var _e = (0, react_1.useState)(false), errorMessageIsOpen = _e[0], setErrorMessageIsOpen = _e[1];
    var saveHandler = function () {
        setIsSaving(true);
        if (errorMessage) {
            setErrorMessage('');
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        (0, buzzingpixel_mission_control_frontend_core_1.createPortal)(react_1.default.createElement(ErrorModal_1.default, { isOpen: errorMessageIsOpen, setIsOpen: setErrorMessageIsOpen, message: errorMessage })),
        react_1.default.createElement("form", { onSubmit: function (e) {
                e.preventDefault();
                saveHandler();
            } },
            react_1.default.createElement("div", { className: "overflow-hidden bg-white shadow sm:rounded-lg max-w-6xl" },
                react_1.default.createElement("div", { className: "px-4 py-6 sm:px-6" },
                    react_1.default.createElement("div", { className: "sm:grid sm:grid-cols-4 sm:gap-4" },
                        react_1.default.createElement("h3", { className: "text-base font-semibold leading-7 text-gray-900 sm:col-span-2" }, pageTitle),
                        react_1.default.createElement("div", { className: "text-right align-middle sm:col-span-2" },
                            react_1.default.createElement(ShowLastErrorButton_1.default, { errorMessage: errorMessage, setErrorMessageIsOpen: setErrorMessageIsOpen }),
                            react_1.default.createElement(SubmitButton_1.default, { isSaving: isSaving })))),
                react_1.default.createElement("div", { className: "border-t border-gray-100" },
                    react_1.default.createElement("dl", { className: "divide-y divide-gray-100" },
                        react_1.default.createElement(LineItem_1.default, { label: "Assigned To", labelFor: "assigned_to", RenderInput: (react_1.default.createElement(FormInputAssignedTo_1.default, { value: values.assigned_to, setValue: function (val) {
                                    setStringValue('assigned_to', val);
                                } })) }),
                        react_1.default.createElement(LineItem_1.default, { label: "Additional Watchers", labelFor: "additional_watchers", RenderInput: (react_1.default.createElement(FormInputAdditionalWatchers_1.default, { value: values.additional_watchers, setValue: function (val) {
                                    setArrayStringValue('additional_watchers', val);
                                } })) }),
                        react_1.default.createElement(LineItem_1.default, { label: "Title", labelFor: "title", RenderInput: (react_1.default.createElement(FormInputText_1.default, { name: "title", useMaxWidth: false, value: values.title, setValue: function (val) {
                                    setStringValue('title', val);
                                } })) }),
                        react_1.default.createElement("div", { className: "px-4 py-6 sm:px-6" },
                            react_1.default.createElement("div", { className: "text-right align-middle" },
                                react_1.default.createElement(ShowLastErrorButton_1.default, { errorMessage: errorMessage, setErrorMessageIsOpen: setErrorMessageIsOpen }),
                                react_1.default.createElement(SubmitButton_1.default, { isSaving: isSaving })))))))));
};
CreateEditTicket.defaultProps = {
    incomingValues: undefined,
};
exports.default = CreateEditTicket;
