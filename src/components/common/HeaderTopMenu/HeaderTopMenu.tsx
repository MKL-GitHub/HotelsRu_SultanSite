import { FC } from 'react';
import { Link } from 'react-router-dom';

import "./HeaderTopMenu.scss";

interface HeaderTopMenuProps {

}

const HeaderTopMenu: FC<HeaderTopMenuProps> = () => {
    return (
        <ul className="HeaderTopMenu">
            <li><Link to="" className="HeaderTopMenu__Link">О компании</Link></li>
            <li><Link to="" className="HeaderTopMenu__Link">Доставка и оплата</Link></li>
            <li><Link to="" className="HeaderTopMenu__Link">Возврат</Link></li>
            <li><Link to="" className="HeaderTopMenu__Link">Контакты</Link></li>
        </ul>
    );
}

export default HeaderTopMenu;