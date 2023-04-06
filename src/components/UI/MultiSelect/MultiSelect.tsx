import { FC, useState } from 'react';

import "./MultiSelect.scss";
import Button from '../Button/Button';

interface MultiSelectProps {
    options: string[];
    selectedOptions: string[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelect: FC<MultiSelectProps> =
    ({ options, selectedOptions, setSelectedOptions }) => {
        const [isOpened, setIsOpened] = useState<boolean>(false);
        const [optionsForSelect, setOptionsForSelect] = useState<string[]>(
            options
                .filter(option => !selectedOptions?.includes(option))
                .sort((a, b) => a.localeCompare(b))
        );

        const handleSelectOnClick = (): void => {
            setIsOpened(!isOpened);
        }

        const handleOptionOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
            event.stopPropagation();

            setSelectedOptions([...selectedOptions, event.currentTarget.innerText]);
            setOptionsForSelect(optionsForSelect.filter(option =>
                option !== event.currentTarget.innerText));
        }

        const handleRemoveOption = (event: React.MouseEvent<HTMLButtonElement>): void => {
            event.stopPropagation();

            setOptionsForSelect(
                [...optionsForSelect, event.currentTarget.innerText]
                    .sort((a, b) => a.localeCompare(b))
            );
            setSelectedOptions(
                selectedOptions
                    .filter(option => option !== event.currentTarget.innerText)
                    .sort((a, b) => a.localeCompare(b))
            );
        }

        return (
            <div
                className="MultiSelect"
                onClick={handleSelectOnClick}
                data-is-opened={isOpened}
            >
                {!!selectedOptions.length &&
                    <ul className="MultiSelect__SelectedOptions">
                        {selectedOptions.map(option =>
                            <li key={option}>
                                <Button text={option} onClick={handleRemoveOption} />
                            </li>
                        )}
                    </ul>
                }
                {isOpened &&
                    <ul className="MultiSelect__Options">
                        {optionsForSelect.map((option, index) =>
                            <li key={index} >
                                <Button text={option} onClick={handleOptionOnClick} />
                            </li>
                        )}
                    </ul>
                }
                <div className="MultiSelect__Triangle" data-is-opened={isOpened} />
            </div >
        );
    }

export default MultiSelect;