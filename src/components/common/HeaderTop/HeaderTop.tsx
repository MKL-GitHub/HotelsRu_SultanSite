import { FC } from 'react';
import HeaderTopContactInfo from '../HeaderTopContactInfo/HeaderTopContactInfo';
import SiteMenu from '../SiteMenu/SiteMenu';

import "./HeaderTop.scss";

interface HeaderTopProps {

}

const HeaderTop: FC<HeaderTopProps> = () => {
    return (
        <section className="HeaderTop">
            <HeaderTopContactInfo />
            <SiteMenu className="HeaderTopMenu" />
        </section>
    );
}

export default HeaderTop;