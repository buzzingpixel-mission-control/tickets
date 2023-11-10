import React, { useState } from 'react';
import { createPortal } from 'buzzingpixel-mission-control-frontend-core';
import { UseMutationResult } from '@tanstack/react-query/src/types';
import { CreateEditValues } from './CreateEditValues';
import ErrorModal from './ErrorModal';
import ShowLastErrorButton from './ShowLastErrorButton';
import SubmitButton from './SubmitButton';
import LineItem from './LineItem';
import FormInputText from './FormInputText';
import FormInputAssignedTo from './FormInputAssignedTo';
import FormInputAdditionalWatchers from './FormInputAdditionalWatchers';
import FormInputMarkdown from './FormInputMarkdown';

const CreateEditTicket = (
    {
        pageTitle,
        incomingValues,
        mutation,
        onSaveSuccess,
    }: {
        pageTitle: string;
        incomingValues?: CreateEditValues | undefined;
        mutation: UseMutationResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSaveSuccess: (jsonResponse: any) => void;
    },
) => {
    incomingValues = incomingValues ?? {
        title: '',
        assigned_to: '',
        additional_watchers: [],
        content: '',
    };

    const [isSaving, setIsSaving] = useState<boolean>(false);

    const [values, setValues] = useState<CreateEditValues>(incomingValues);

    const setStringValue = (
        key: 'title' | 'assigned_to' | 'content',
        val: string,
    ) => {
        const newValues = values;

        newValues[key] = val;

        setValues(() => ({ ...newValues }));
    };

    const setArrayStringValue = (
        key: 'additional_watchers',
        val: Array<string>,
    ) => {
        const newValues = values;

        newValues[key] = val;

        setValues(() => ({ ...newValues }));
    };

    const [errorMessage, setErrorMessage] = useState<string>('');

    const [errorMessageIsOpen, setErrorMessageIsOpen] = useState(false);

    const saveHandler = () => {
        setIsSaving(true);

        if (errorMessage) {
            setErrorMessage('');
        }

        mutation.mutate(values, {
            onSuccess: onSaveSuccess,
            onError: (error) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setErrorMessage(error.message || 'Unable to add Ticket');

                setErrorMessageIsOpen(true);

                setIsSaving(false);
            },
        });
    };

    return (
        <>
            {createPortal(
                <ErrorModal
                    isOpen={errorMessageIsOpen}
                    setIsOpen={setErrorMessageIsOpen}
                    message={errorMessage}
                />,
            )}
            <form onSubmit={(e) => {
                e.preventDefault();

                saveHandler();
            }}
            >
                <div className="overflow-hidden bg-white shadow sm:rounded-lg max-w-6xl">
                    <div className="px-4 py-6 sm:px-6">
                        <div className="sm:grid sm:grid-cols-4 sm:gap-4">
                            <h3 className="text-base font-semibold leading-7 text-gray-900 sm:col-span-2">
                                {pageTitle}
                            </h3>
                            <div className="text-right align-middle sm:col-span-2">
                                <ShowLastErrorButton
                                    errorMessage={errorMessage}
                                    setErrorMessageIsOpen={setErrorMessageIsOpen}
                                />
                                <SubmitButton
                                    isSaving={isSaving}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <LineItem
                                label="Assigned To"
                                labelFor="assigned_to"
                                RenderInput={(
                                    <FormInputAssignedTo
                                        value={values.assigned_to}
                                        setValue={(val: string) => {
                                            setStringValue('assigned_to', val);
                                        }}
                                    />
                                )}
                            />
                            <LineItem
                                label="Additional Watchers"
                                labelFor="additional_watchers"
                                RenderInput={(
                                    <FormInputAdditionalWatchers
                                        value={values.additional_watchers}
                                        setValue={(val: Array<string>) => {
                                            setArrayStringValue('additional_watchers', val);
                                        }}
                                    />
                                )}
                            />
                            <LineItem
                                label="Title"
                                labelFor="title"
                                RenderInput={(
                                    <FormInputText
                                        name="title"
                                        useMaxWidth={false}
                                        value={values.title}
                                        setValue={(val: string) => {
                                            setStringValue('title', val);
                                        }}
                                    />
                                )}
                            />
                            <LineItem
                                label="Content"
                                labelFor="content"
                                RenderInput={(
                                    <FormInputMarkdown
                                        name="title"
                                        value={values.content}
                                        setValue={(val: string) => {
                                            setStringValue('content', val);
                                        }}
                                    />
                                )}
                            />
                            <div className="px-4 py-6 sm:px-6">
                                <div className="text-right align-middle">
                                    <ShowLastErrorButton
                                        errorMessage={errorMessage}
                                        setErrorMessageIsOpen={setErrorMessageIsOpen}
                                    />
                                    <SubmitButton
                                        isSaving={isSaving}
                                    />
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </form>
        </>
    );
};

CreateEditTicket.defaultProps = {
    incomingValues: undefined,
};

export default CreateEditTicket;
