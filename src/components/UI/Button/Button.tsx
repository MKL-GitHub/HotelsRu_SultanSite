import { FC } from 'react';

import "./Button.scss";

interface ButtonProps {
    text?: string | number;
    image?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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