import { FC } from 'react';
import { Link } from 'react-router-dom';

import "./SiteMenu.scss";

interface SiteMenuProps {
    className?: string;
}

const SiteMenu: FC<SiteMenuProps> = ({ className }) => {
    return (
        <ul className={className}>
            <li><Link to="">О компании</Link></li>
            <li><Link to="">Доставка и оплата</Link></li>
            <li><Link to="">Возврат</Link></li>
            <li><Link to="">Контакты</Link></li>
        </ul>
    );
}

export default SiteMenu;