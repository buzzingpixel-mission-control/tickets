import React, { Dispatch, SetStateAction } from 'react';
declare const FormInputText: {
    ({ name, value, setValue, placeholder, useMaxWidth, }: {
        name: string;
        value?: string;
        setValue: Dispatch<SetStateAction<string>>;
        placeholder?: string;
        useMaxWidth?: boolean;
    }): React.JSX.Element;
    defaultProps: {
        value: string;
        placeholder: string;
        useMaxWidth: boolean;
    };
};
export default FormInputText;
