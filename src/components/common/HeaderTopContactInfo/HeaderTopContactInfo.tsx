import { FC } from 'react';
import { Link } from 'react-router-dom';

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
                <div>
                    <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                    <span>(Рынок Восточный)</span>
                </div>

            </li>
            <li>
                <img src={mailImg} alt="Почта" />
                <div>
                    <Link to={""}>opt.sultan@mail.ru</Link>
                    <span>На связи в любое время</span>
                </div>
            </li>
        </ul>
    );
}

export default HeaderTopContactInfo;