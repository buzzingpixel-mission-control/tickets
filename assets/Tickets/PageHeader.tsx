import React from 'react';
import { Link } from 'react-router-dom';
import useQuickStatusFilter from './useQuickStatusFilter';
import { ticketStatusList } from './TicketStatus';
import useFilterText from './useFilterText';

function classNames (...classes: Array<string>) {
    return classes.filter(Boolean).join(' ');
}

const PageHeader = (
    {
        pageTitle,
    }: {
        pageTitle: string;
    },
) => {
    const [quickStatusFilter, setQuickStatusFilter] = useQuickStatusFilter();

    const [filterText, setFilterText] = useFilterText();

    return (
        <>
            <div className="pb-6 lg:flex lg:justify-between">
                <h1 className="text-2xl font-semibold leading-6 text-gray-900 hidden lg:block">
                    {pageTitle}
                </h1>
                <div className="text-right">
                    <Link
                        to="/tickets/create"
                        className="ml-2 my-1 inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                        Create Ticket
                    </Link>
                </div>
            </div>
            <div>
                <div className="sm:flex sm:mb-4">
                    <div className="mb-4 sm:mb-0 sm:mr-4">
                        <div>
                            <div className="sm:hidden">
                                <label htmlFor="statusFilter" className="sr-only">
                                    Select a status filter
                                </label>
                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                <select
                                    id="statusFilter"
                                    name="statusFilter"
                                    className="block w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                                    defaultValue={quickStatusFilter}
                                    onChange={(e) => {
                                        setQuickStatusFilter(e.target.value);
                                    }}
                                >
                                    {ticketStatusList.map((filterStatus) => (
                                        <option
                                            key={filterStatus.value}
                                            value={filterStatus.value}
                                        >
                                            {filterStatus.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="hidden sm:block">
                                <nav className="flex space-x-4" aria-label="Status Filter">
                                    {ticketStatusList.map((filterStatus) => {
                                        const isCurrent = filterStatus.value === quickStatusFilter;

                                        return (
                                            <a
                                                key={filterStatus.value}
                                                href="#"
                                                className={classNames(
                                                    isCurrent ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-500 hover:text-gray-700',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                                aria-current={isCurrent ? 'page' : undefined}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setQuickStatusFilter(filterStatus.value);
                                                }}
                                            >
                                                {filterStatus.name}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 sm:mb-0 grow">
                        <input
                            type="text"
                            name="filter"
                            id="filter"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                            placeholder="Filter results"
                            value={filterText}
                            onChange={(e) => {
                                setFilterText(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageHeader;
