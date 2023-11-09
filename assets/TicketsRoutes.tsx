import React from 'react';
import { Route } from 'react-router-dom';
import TicketsPage from './Tickets/Page';
import PageCreate from './Tickets/CreateEdit/PageCreate';

const TicketsRoutes = () => (
    <>
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/tickets/page/:pageNum" element={<TicketsPage />} />
        <Route path="/tickets/create" element={<PageCreate />} />
    </>
);

export default TicketsRoutes;
