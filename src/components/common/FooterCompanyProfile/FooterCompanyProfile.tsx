import { FC } from 'react';
import InputWithButtonAndImage from '../InputWithButtonAndImage/InputWithButtonAndImage';

import "./FooterCompanyProfile.scss";

import logoImg from "../../../svg/logo.svg";
import rightImg from "./svg/right.svg";


interface FooterCompanyProfileProps {

}

const FooterCompanyProfile: FC<FooterCompanyProfileProps> = () => {
    return (
        <div className="FooterCompanyProfile">
            <img src={logoImg} alt="Логотип" />
            <div>
                Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
            </div>
            <div>Подпишись на скидки и акции</div>
            <InputWithButtonAndImage image={rightImg} placeholder={"Введите ваш E-mail"} />
        </div>
    );
}

export default FooterCompanyProfile;