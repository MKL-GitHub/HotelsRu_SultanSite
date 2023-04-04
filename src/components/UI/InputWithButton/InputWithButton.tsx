import { ChangeEvent, FC } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

import "./InputWithButton.scss";

import searchImg from "./svg/search.svg";

interface InputWithButtonAndImageProps {
    className?: string;
    image?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

const InputWithButtonAndImage: FC<InputWithButtonAndImageProps> =
    ({ image = searchImg, placeholder = "Поиск...", ...props }) => {
        return (
            <div className={"InputWithButton " + props.className}>
                <TextInput
                    placeholder={placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                <Button image={image} onClick={props.onButtonClick} className="OrangeButton" />
            </div>
        );
    }

export default InputWithButtonAndImage;