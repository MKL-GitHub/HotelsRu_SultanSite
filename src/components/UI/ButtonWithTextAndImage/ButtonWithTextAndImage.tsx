import { FC } from 'react';

import "./ButtonWithTextAndImage.scss";

interface ButtonWithTextAndImageProps {
    text?: string;
    image: string;
    className?: string;
}

const ButtonWithTextAndImage: FC<ButtonWithTextAndImageProps> = ({text, image, className}) => {
    return (
        <button className={"ButtonWithTextAndImage " + className}>
            <span>{text}</span>
            <img src={image} />
        </button>
    );
}

export default ButtonWithTextAndImage;