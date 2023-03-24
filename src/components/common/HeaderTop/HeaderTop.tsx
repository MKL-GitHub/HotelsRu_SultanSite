import { FC } from 'react';
import HeaderTopContactInfo from '../HeaderTopContactInfo/HeaderTopContactInfo';
import HeaderTopMenu from '../HeaderTopMenu/HeaderTopMenu';

import "./HeaderTop.scss";
// import styles from "./HeaderTop.module.scss";

interface HeaderTopProps {

}

const HeaderTop: FC<HeaderTopProps> = () => {
    return (
        <section className="HeaderTop">
            <HeaderTopContactInfo />
            <HeaderTopMenu />
        </section>
    );
}

export default HeaderTop;