import React from 'react';
import {
    useBreadcrumbs,
    useHidePageTitle,
    usePageTitle,
} from 'buzzingpixel-mission-control-frontend-core';
import { useNavigate } from 'react-router-dom';
import CreateEditTicket from './CreateEditTicket';
import { useAddTicketMutation } from '../TicketData';

const PageCreate = () => {
    const pageTitle = 'Create Ticket';

    const navigate = useNavigate();

    useHidePageTitle(true);

    usePageTitle(pageTitle);

    useBreadcrumbs([
        {
            name: 'Tickets',
            href: '/tickets',
        },
        {
            name: pageTitle,
            href: '/tickets/create',
        },
    ]);

    return (
        <CreateEditTicket
            pageTitle={pageTitle}
            mutation={useAddTicketMutation()}
            onSaveSuccess={() => { navigate('/tickets'); }}
        />
    );
};

export default PageCreate;
