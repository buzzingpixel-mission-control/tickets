import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames (...classes: Array<string>) {
    return classes.filter(Boolean).join(' ');
}

const SelectAllComponent = () => {
    // const withSelectedDisabled = selectedItems.length < 1;
    const withSelectedDisabled = true;

    const withSelectedOpacity = withSelectedDisabled ? 'opacity-40' : 'opacity-100';

    const withSelectedPointerEvents = withSelectedDisabled
        ? 'pointer-events-none'
        : 'pointer-events-auto';

    return (
        <>
            <div className="text-right pr-4 mb-4">
                <label
                    className="text-xs text-gray-900 mr-2"
                    htmlFor="select_all_pings"
                >
                    select all visible
                </label>
                <input
                    id="select_all_pings"
                    name="ping_select[]"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                    onChange={() => {
                        // if (e.currentTarget.checked) {
                        //     setSelectedItems(items.map((item) => item.id));
                        //
                        //     return;
                        // }
                        //
                        // setSelectedItems([]);
                    }}
                />
            </div>
            <div className={`text-right pr-4 mb-4 ${withSelectedOpacity} ${withSelectedPointerEvents}`}>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            With Selected…
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div className="py-1">
                                <Menu.Item disabled={withSelectedDisabled}>
                                    {({ active }) => (
                                        <span
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm cursor-pointer',
                                            )}
                                            // onClick={}
                                        >
                                            TODO
                                        </span>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
};

export default SelectAllComponent;
