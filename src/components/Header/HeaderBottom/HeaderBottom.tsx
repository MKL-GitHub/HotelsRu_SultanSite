import { FC } from 'react';
import ButtonWithTextAndImage from '../../ButtonWithTextAndImage/ButtonWithTextAndImage';
import InputWithButtonAndImage from '../../InputWithButtonAndImage/InputWithButtonAndImage';
import ContactInfoCall from '../../ContactInfoCall/ContactInfoCall';
import PriceListButton from '../../PriceListButton/PriceListButton';
import Basket from '../../Basket/Basket';

import "./HeaderBottom.scss";

import logoImg from "../../../svg/logo.svg";
import fourRectsImg from "./svg/four_rects.svg";
import callOrderImg from "./images/call_order.png";


interface HeaderBottomProps {

}

const HeaderBottom: FC<HeaderBottomProps> = () => {
    return (
        <section className="HeaderBottom">
            <img src={logoImg} alt="Логотип" />
            <ButtonWithTextAndImage text="Каталог" image={fourRectsImg} />
            <InputWithButtonAndImage />
            <div className="HeaderBottom__Right">
                <div className="HeaderBottom__CallOrder">
                    <ContactInfoCall />
                    <img src={callOrderImg} alt="Заказать звонок" />
                </div>
                <PriceListButton />
                <Basket />
            </div>
        </section>
    );
}

export default HeaderBottom;