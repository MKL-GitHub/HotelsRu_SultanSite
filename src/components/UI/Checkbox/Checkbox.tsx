import { FC } from 'react';

import "./Checkbox.scss";

interface CheckboxProps {
    checked?: boolean;
    label?: any;
    onChange: (isChecked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> =
    ({ checked = false, label, onChange }) => {
        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.checked);
        }

        return (
            <label>
                <input type="checkbox" checked={checked} onChange={handleOnChange} />
                {label && <span>{label}</span>}
            </label>
        );
    }

export default Checkbox;