import { FC } from 'react';
import Button from '../Button/Button';

import "./PriceListButton.scss";

import downArrow from "./svg/down_arrow.svg";

interface PriceListButtonProps {

}

const PriceListButton: FC<PriceListButtonProps> = () => {
    return (
        <Button text="Прайс-лист" image={downArrow} />
    );
}

export default PriceListButton;