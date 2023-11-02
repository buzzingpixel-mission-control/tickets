import React from 'react';
import {
    useBreadcrumbs, useHidePageTitle,
    usePageTitle,
} from 'buzzingpixel-mission-control-frontend-core';
import PageHeader from './PageHeader';
import TicketList from './TicketList';

const TicketsListPage = (
    {
        pageNum,
    }: {
        pageNum: number;
    },
) => {
    let pageTitle = 'Tickets';

    let breadcrumbs = [];

    if (pageNum > 1) {
        pageTitle += `| Page ${pageNum}`;

        breadcrumbs = [
            {
                name: 'Tickets',
                href: '/tickets',
            },
            {
                name: `Page ${pageNum}`,
                href: `/tickets/page/${pageNum}`,
            },
        ];
    }

    usePageTitle(pageTitle);

    useHidePageTitle(true);

    useBreadcrumbs(breadcrumbs);

    return (
        <>
            <PageHeader pageTitle={pageTitle} />
            <TicketList pageNum={pageNum} />
        </>
    );
};

export default TicketsListPage;
