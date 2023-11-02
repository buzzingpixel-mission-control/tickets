import React from 'react';
import { NotFoundPage } from 'buzzingpixel-mission-control-frontend-core';

const PageNumberWrapper = (
    {
        pageNum,
        children,
    }: {
        pageNum: string | number | undefined;
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    if (pageNum === undefined) {
        return <>{children}</>;
    }

    if (Number.isNaN(pageNum) || pageNum.toString().split('.').length > 1) {
        return <NotFoundPage />;
    }

    if (typeof pageNum === 'string') {
        pageNum = parseInt(pageNum, 10);
    }

    return <>{children}</>;
};

export default PageNumberWrapper;
