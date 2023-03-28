import { FC } from 'react';
import { Link } from 'react-router-dom';
import SiteMenu from '../SiteMenu/SiteMenu';
import SiteCategories from '../SiteCategories/SiteCategories';
import PriceListButton from '../UI/PriceListButton/PriceListButton';
import ContactInfoCall from '../UI/ContactInfoCall/ContactInfoCall';
import ContactInfoMail from '../UI/ContactInfoMail/ContactInfoMail';
import FooterCompanyProfile from './FooterCompanyProfile/FooterCompanyProfile';

import "./Footer.scss";

import whatsappImg from "./svg/whatsapp.svg";
import telegramImg from "./svg/telegram.svg";
import visaImg from "./svg/visa.svg";
import mastercardImg from "./svg/mastercard.svg";

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (
        <section className="Footer">
            <ul>
                <FooterCompanyProfile />
                <li>
                    <div className="Footer__Title">Меню сайта:</div>
                    <SiteMenu className="Footer__List" />
                </li>
                <li>
                    <div className="Footer__Title">Категории:</div>
                    <SiteCategories className="Footer__List" />
                </li>
                <li>
                    <div className="Footer__Title">Скачать прайс-лист:</div>
                    <ul className="Footer__List" >
                        <PriceListButton />
                        <li>Связь в мессенджерах:</li>
                        <ul className="Footer__SocialNetworks">
                            <li><img src={whatsappImg} alt="WhatsApp" /></li>
                            <li><img src={telegramImg} alt="Telegram" /></li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <div className="Footer__Title">Контакты:</div>
                    <ul className="Footer__List" >
                        <ContactInfoCall className={"ContactInfoCall_White"} />
                        <ContactInfoMail className={"ContactInfoMail_White"} />
                        <ul className="Footer__CreditCards">
                            <li><Link to=""><img src={visaImg} alt="VISA" /></Link></li>
                            <li><Link to=""><img src={mastercardImg} alt="mastercard" /></Link></li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default Footer;