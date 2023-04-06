import { FC } from 'react';

import "./Select.scss";

interface SelectProps {
    value: string;
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> =
    ({ value, options, onChange}) => {
        return <select value={value} onChange={onChange}>
            {options.map(option =>
                <option key={option} value={option}>{option}</option>
            )}
        </select>;
    }

export default Select;