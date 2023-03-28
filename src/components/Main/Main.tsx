import { FC, ReactNode, useState } from 'react';
// import { pageCategories } from '../../../dictionaries/pageCatetories';
import PageNavigationPanel from '../PageNavigationPanel/PageNavigationPanel';

import "./Main.scss";

interface MainProps {
    children?: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
    // const [currentPage, setCurrentPage] = useState(["homes"]);
    // let a =  pageCategories.keys;

    return (
        <section>
            {/* <PageNavigationPanel currentPage={currentPage} /> */}
            {children}
        </section>
    );
}

export default Main;