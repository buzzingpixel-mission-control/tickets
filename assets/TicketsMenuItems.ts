import { MenuItem } from 'buzzingpixel-mission-control-frontend-core';
import {
    TicketIcon,
} from '@heroicons/react/24/outline';

const TicketsMenuItems = (): Array<MenuItem> => [
    {
        name: 'Tickets',
        href: '/tickets',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        icon: TicketIcon,
    },
];

export default TicketsMenuItems;
