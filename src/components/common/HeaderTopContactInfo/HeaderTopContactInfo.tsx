import { FC } from 'react';
import { Link } from 'react-router-dom';
import ContactInfoLocation from '../ContactInfoLocation/ContactInfoLocation';
import ContactInfoMail from '../ContactInfoMail/ContactInfoMail';

import "./HeaderTopContactInfo.scss";

import locationImg from "./svg/location.svg";
import mailImg from "./svg/mail.svg";

interface HeaderTopContactInfoProps {

}

const HeaderTopContactInfo: FC<HeaderTopContactInfoProps> = () => {
    return (
        <ul className="HeaderTopContactInfo">
            <li>
                <img src={locationImg} alt="Расположение" />
                <ContactInfoLocation />
            </li>
            <li>
                <img src={mailImg} alt="Почта" />
                <ContactInfoMail />
            </li>
        </ul>
    );
}

export default HeaderTopContactInfo;