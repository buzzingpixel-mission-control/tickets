import React, { Dispatch, SetStateAction } from 'react';
import { useUsersData } from 'buzzingpixel-mission-control-frontend-core';
import Select from 'react-select';

type Option = {
    value: string;
    label: string;
};

type Options = Array<Option>;

const FormInputAssignedTo = (
    {
        value = [],
        setValue,
    }: {
        value?: Array<string>;
        setValue: Dispatch<SetStateAction<Array<string>>>;
    },
) => {
    const {
        status,
        data,
    } = useUsersData();

    const options = [] as Options;

    if (status === 'success') {
        data.forEach((user) => {
            let label = user.emailAddress;

            if (user.name) {
                label += ` (${user.name})`;
            }

            options.push({
                value: user.id,
                label,
            });
        });
    }

    const selectionOptions = options.filter((option) => value.indexOf(option.value) > -1);

    return (
        <div>
            {(() => {
                if (status === 'loading') {
                    return (
                        <div
                            className="inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-100 text-cyan-600"
                            role="status"
                        >
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >
                                Loading...
                            </span>
                        </div>
                    );
                }

                return (
                    <Select
                        id="project_id"
                        onChange={(selected) => {
                            setValue(selected.map((option) => (option.value)));
                        }}
                        value={selectionOptions}
                        options={options}
                        className="react-select-control"
                        isClearable
                        isMulti
                    />
                );
            })()}
        </div>
    );
};

FormInputAssignedTo.defaultProps = {
    value: [],
};

export default FormInputAssignedTo;
