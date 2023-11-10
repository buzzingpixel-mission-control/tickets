import React from 'react';
import { UseMutationResult } from '@tanstack/react-query/src/types';
import { CreateEditValues } from './CreateEditValues';
declare const CreateEditTicket: {
    ({ pageTitle, incomingValues, mutation, onSaveSuccess, }: {
        pageTitle: string;
        incomingValues?: CreateEditValues | undefined;
        mutation: UseMutationResult;
        onSaveSuccess: (jsonResponse: any) => void;
    }): React.JSX.Element;
    defaultProps: {
        incomingValues: any;
    };
};
export default CreateEditTicket;
