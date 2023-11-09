import React, { Dispatch, SetStateAction } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const FormInputMarkdown = (
    {
        name,
        value = '',
        setValue,
    }: {
        name: string;
        value?: string;
        setValue: Dispatch<SetStateAction<string>>;
    },
) => (
    <div className="z-50 relative prose max-w-none">
        <SimpleMDE
            id={name}
            value={value}
            onChange={(val: string) => { setValue(val); }}
        />
    </div>
);

FormInputMarkdown.defaultProps = {
    value: '',
};

export default FormInputMarkdown;
