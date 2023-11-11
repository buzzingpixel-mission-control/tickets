"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditTicketMutation = exports.useAddTicketMutation = void 0;
var buzzingpixel_mission_control_frontend_core_1 = require("buzzingpixel-mission-control-frontend-core");
// export const useTicketData = (
//     status: string,
//     filter: string;
// ) => {
//     const uri = '/tickets';
//
//     return useApiQueryWithSignInRedirect();
// };
var useAddTicketMutation = function () { return (0, buzzingpixel_mission_control_frontend_core_1.useApiMutation)({
    invalidateQueryKeysOnSuccess: ['/tickets'],
    prepareApiParams: function (data) { return ({
        uri: '/tickets',
        payload: data,
        method: buzzingpixel_mission_control_frontend_core_1.RequestMethod.PUT,
    }); },
}); };
exports.useAddTicketMutation = useAddTicketMutation;
var useEditTicketMutation = function (id) { return (0, buzzingpixel_mission_control_frontend_core_1.useApiMutation)({
    invalidateQueryKeysOnSuccess: ["/tickets/".concat(id)],
    prepareApiParams: function (data) { return ({
        uri: '/tickets',
        payload: data,
        method: buzzingpixel_mission_control_frontend_core_1.RequestMethod.PATCH,
    }); },
}); };
exports.useEditTicketMutation = useEditTicketMutation;
