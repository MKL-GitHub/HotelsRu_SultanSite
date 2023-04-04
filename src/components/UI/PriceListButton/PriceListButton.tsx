import { FC } from 'react';
import Button from '../Button/Button';

import "./PriceListButton.scss";

import downArrow from "./svg/down_arrow.svg";

interface PriceListButtonProps {
    className?: string;
}

const PriceListButton: FC<PriceListButtonProps> = ({ className }) => {
    return (
        <Button
            text="Прайс-лист"
            image={downArrow}
            className={"PriceListButton " + className} />
    );
}

export default PriceListButton;