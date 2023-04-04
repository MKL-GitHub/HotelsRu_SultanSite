import { FC } from 'react';
import ContactInfoLocation from '../../UI/ContactInfoLocation/ContactInfoLocation';
import ContactInfoMail from '../../UI/ContactInfoMail/ContactInfoMail';

import "./HeaderTopContactInfo.scss";
import "../../../styles/styles.scss";

import locationImg from "./svg/location.svg";
import mailImg from "./svg/mail.svg";

interface HeaderTopContactInfoProps {

}

const HeaderTopContactInfo: FC<HeaderTopContactInfoProps> = () => {
    return (
        <ul className="HeaderTopContactInfo DashedUL">
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