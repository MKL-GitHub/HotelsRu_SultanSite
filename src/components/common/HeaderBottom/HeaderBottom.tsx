import { FC } from 'react';
import ButtonWithTextAndImage from '../ButtonWithTextAndImage/ButtonWithTextAndImage';
import InputWithButtonAndImage from '../InputWithButtonAndImage/InputWithButtonAndImage';
import ContactInfoCall from '../ContactInfoCall/ContactInfoCall';
import Basket from '../Basket/Basket';
import PriceListButton from '../PriceListButton/PriceListButton';

import "./HeaderBottom.scss";

import logoImg from "../../../svg/logo.svg";
import fourRectsImg from "./svg/four_rects.svg";
import searchImg from "./svg/search.svg";
import callOrderImg from "./images/call_order.png";

interface HeaderBottomProps {

}

const HeaderBottom: FC<HeaderBottomProps> = () => {
    return (
        <section className="HeaderBottom">
            <img src={logoImg} alt="Логотип" />
            <ButtonWithTextAndImage text="Каталог" image={fourRectsImg} />
            <InputWithButtonAndImage image={searchImg} placeholder={"Поиск..."}/>
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