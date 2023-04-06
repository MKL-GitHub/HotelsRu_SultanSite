import { FC } from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTop from './HeaderTop/HeaderTop';

import "./Header.scss";
import IGood from '../../interfaces/IGood';

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
    return (
        <header className="Header">
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
}

export default Header;