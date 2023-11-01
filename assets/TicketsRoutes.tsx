import React from 'react';
import { Route } from 'react-router-dom';
import TicketsPage from './Tickets/Page';

const TicketsRoutes = () => (
    <>
        <Route path="/tickets" element={<TicketsPage />} />
    </>
);

export default TicketsRoutes;
