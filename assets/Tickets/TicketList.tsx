import React from 'react';
import {
    NoResultsAddItem,
    PartialPageLoading,
} from 'buzzingpixel-mission-control-frontend-core';
import { TicketIcon } from '@heroicons/react/24/outline';
import SelectAllComponent from './SelectAllComponent';

const TicketList = (
    {
        pageNum,
    }: {
        pageNum: number;
    },
) => {
    console.log('here');

    // return <PartialPageLoading />;

    // return (
    //     <NoResultsAddItem
    //         icon={<TicketIcon />}
    //         headline="There are no tickets"
    //     />
    // );

    return (
        <>
            <SelectAllComponent />
        </>
    );
};

export default TicketList;
