import React, { Dispatch, SetStateAction } from 'react';
declare const FormInputAssignedTo: {
    ({ value, setValue, }: {
        value?: Array<string>;
        setValue: Dispatch<SetStateAction<Array<string>>>;
    }): React.JSX.Element;
    defaultProps: {
        value: any[];
    };
};
export default FormInputAssignedTo;
