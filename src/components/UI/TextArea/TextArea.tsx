import { FC } from 'react';

import "./TextArea.scss";

interface TextAreaProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({ placeholder, value, onChange }) => {
    return <textarea
        className="TextArea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />;
}

export default TextArea;