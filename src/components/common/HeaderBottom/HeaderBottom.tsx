import { FC } from 'react';

import styles from "./HeaderBottom.module.scss";

interface HeaderBottomProps {

}

const HeaderBottom: FC<HeaderBottomProps> = () => {
    return ( 
        <section className={styles.HeaderBottom}>
            bottom
        </section>
     );
}

export default HeaderBottom;