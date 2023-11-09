import React from 'react';
import {
    useBreadcrumbs,
    useHidePageTitle,
    usePageTitle,
} from 'buzzingpixel-mission-control-frontend-core';
import CreateEditTicket from './CreateEditTicket';

const PageCreate = () => {
    const pageTitle = 'Create Ticket';

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
        <CreateEditTicket pageTitle={pageTitle} />
    );
};

export default PageCreate;
