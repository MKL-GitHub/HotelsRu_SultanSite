import { FC } from 'react';
import Button from '../../UI/Button/Button';
import InputWithButtonAndImage from '../../UI/InputWithButton/InputWithButton';
import ContactInfoCall from '../../UI/ContactInfoCall/ContactInfoCall';
import PriceListButton from '../../UI/PriceListButton/PriceListButton';
import GoodsCart from '../../GoodsCart/GoodsCart';

import "./HeaderBottom.scss";

import logoImg from "../../../svg/logo.svg";
import fourRectsImg from "./svg/four_rects.svg";
import callOrderImg from "./images/call_order.png";
import IGood from '../../../data/IGood';


interface HeaderBottomProps {

}

const HeaderBottom: FC<HeaderBottomProps> = () => {
    return (
        <section className="HeaderBottom">
            <ul>
                <li className="HeaderBottom__Left">
                    <img src={logoImg} alt="Логотип" />
                    <Button
                        text="Каталог"
                        image={fourRectsImg}
                        className="OrangeButton"
                    />
                    <InputWithButtonAndImage />
                </li>
                <li className="HeaderBottom__Right">
                    <div className="HeaderBottom__CallOrder">
                        <ContactInfoCall />
                        <img src={callOrderImg} alt="Заказать звонок" />
                    </div>
                    <PriceListButton className="OrangeButton HeaderBottom__PriceListBtn"/>
                    <GoodsCart />
                </li>
            </ul>
        </section>
    );
}

export default HeaderBottom;