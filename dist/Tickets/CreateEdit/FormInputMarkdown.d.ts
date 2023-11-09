import React, { Dispatch, SetStateAction } from 'react';
import 'easymde/dist/easymde.min.css';
declare const FormInputMarkdown: {
    ({ name, value, setValue, }: {
        name: string;
        value?: string;
        setValue: Dispatch<SetStateAction<string>>;
    }): React.JSX.Element;
    defaultProps: {
        value: string;
    };
};
export default FormInputMarkdown;
