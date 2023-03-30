import { ChangeEvent, FC } from 'react';

import "./TextInput.scss";

interface TextInputProps {
    value?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({ value, placeholder, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default TextInput;