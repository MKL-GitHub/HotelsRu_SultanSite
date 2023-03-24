import { FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderNavProps {

}

const HeaderNav: FC<HeaderNavProps> = () => {
    return ( 
        <div>
            <ul>
                <li><Link to="/">О компании</Link></li>
                <li><Link to="/">Доставка и оплата</Link></li>
                <li><Link to="/">Возврат</Link></li>
                <li><Link to="/">Контакты</Link></li>
            </ul>
        </div>
     );
}

export default HeaderNav;