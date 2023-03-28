import { FC } from 'react';
import ButtonWithTextAndImage from '../ButtonWithTextAndImage/ButtonWithTextAndImage';

import "./PriceListButton.scss";

import downArrow from "./svg/down_arrow.svg";

interface PriceListButtonProps {

}

const PriceListButton: FC<PriceListButtonProps> = () => {
    return (
        <ButtonWithTextAndImage text="Прайс-лист" image={downArrow} />
    );
}

export default PriceListButton;