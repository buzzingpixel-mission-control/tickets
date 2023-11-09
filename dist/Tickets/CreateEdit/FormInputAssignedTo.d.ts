import React, { Dispatch, SetStateAction } from 'react';
declare const FormInputAssignedTo: {
    ({ value, setValue, }: {
        value?: string;
        setValue: Dispatch<SetStateAction<string>>;
    }): React.JSX.Element;
    defaultProps: {
        value: string;
    };
};
export default FormInputAssignedTo;
