import { FC } from 'react';
import Button from '../Button/Button';

import "./BasketButton.scss";

import basketImg from "./svg/basket.svg";

interface BasketButtonProps {
    onClick?: () => void;
}

const BasketButton: FC<BasketButtonProps> = ({ onClick }) => {
    return (
        <Button image={basketImg} className="OrangeButton BasketButton" onClick={onClick} />
    );
}

export default BasketButton;