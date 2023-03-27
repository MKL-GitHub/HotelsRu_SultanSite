import { FC } from 'react';

import "./ButtonWithTextAndImage.scss";

interface ButtonWithTextAndImageProps {
    text: string;
    image: string;
}

const ButtonWithTextAndImage: FC<ButtonWithTextAndImageProps> = ({text, image}) => {
    return (
        <button className="ButtonWithTextAndImage">
            <span>{text}</span>
            <img src={image} />
        </button>
    );
}

export default ButtonWithTextAndImage;