import { ChangeEvent, FC } from 'react';

import "./NumberInput.scss";

interface NumberInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

const NumberInput: FC<NumberInputProps> =
    ({ value, onChange }) => {
        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
            const value: string = event.target.value;
            const newValue: string =
                value.length > 1 && value.substring(0, 1) === "0" && value.substring(0, 2) !== "0."
                    ? value.substring(1)
                    : value

            onChange && onChange(newValue);
        }

        return (
            <input
                type="number"
                defaultValue={value}
                onChange={handleOnChange}
            />
        );
    }

export default NumberInput;