import { FC } from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import HeaderTop from '../HeaderTop/HeaderTop';

// import styles from "./Header.module.scss";
import "./Header.scss";

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