import React from 'react';
import { CreateEditValues } from './CreateEditValues';
declare const CreateEditTicket: {
    ({ pageTitle, incomingValues, }: {
        pageTitle: string;
        incomingValues?: CreateEditValues | undefined;
    }): React.JSX.Element;
    defaultProps: {
        incomingValues: any;
    };
};
export default CreateEditTicket;
