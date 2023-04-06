import { FC, ReactNode } from 'react';

import "./Button.scss";

interface ButtonProps {
    text?: string | number;
    image?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
}

const Button: FC<ButtonProps> =
    ({ text, image, className, onClick, children }) => {
        return (
            <button
                className={"Button " + className}
                onClick={onClick}
            >
                {text && <span>{text}</span>}
                {image && <img src={image} />}
                {children}
            </button>
        );
    }

export default Button;