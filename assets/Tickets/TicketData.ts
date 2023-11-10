import {
    useApiMutation,
    RequestMethod,
} from 'buzzingpixel-mission-control-frontend-core';
import { CreateEditValues } from './CreateEdit/CreateEditValues';

export const useAddTicketMutation = () => useApiMutation<unknown, CreateEditValues>({
    invalidateQueryKeysOnSuccess: ['/tickets'],
    prepareApiParams: (data) => ({
        uri: '/tickets',
        payload: data,
        method: RequestMethod.PUT,
    }),
});

export const useEditTicketMutation = (
    id: string,
) => useApiMutation<unknown, CreateEditValues>({
    invalidateQueryKeysOnSuccess: [`/tickets/${id}`],
    prepareApiParams: (data) => ({
        uri: '/tickets',
        payload: data,
        method: RequestMethod.PATCH,
    }),
});
