import React from 'react';
import { useParams } from 'react-router-dom';
import PageNumberWrapper from './PageNumberWrapper';
import TicketsListPage from './TicketsListPage';

const Page = () => {
    const { pageNum } = useParams();

    let pageNumInt = parseInt(pageNum, 10);

    if (Number.isNaN(pageNumInt)) {
        pageNumInt = 1;
    }

    return (
        <PageNumberWrapper pageNum={pageNum}>
            <TicketsListPage pageNum={pageNumInt} />
        </PageNumberWrapper>
    );
};

export default Page;
