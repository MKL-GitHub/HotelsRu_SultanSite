import { FC } from 'react';

import "./Button.scss";

interface ButtonProps {
    text?: string;
    image?: string;
    className?: string;
    onClick?: any;
}

const Button: FC<ButtonProps> =
    ({ text, image, className, onClick }) => {
        return (
            <button
                className={"Button " + className}
                onClick={onClick}
            >
                {text && <span>{text}</span>}
                {image && <img src={image} />}
            </button>
        );
    }

export default Button;