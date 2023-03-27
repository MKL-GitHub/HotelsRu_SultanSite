import { FC } from 'react';
import CatalogGoodCard from '../CatalogGoodCard/CatalogGoodCard';

import "./PageBody.scss";

interface PageBodyProps {

}

const PageBody: FC<PageBodyProps> = () => {
    return (
        <div>
            <CatalogGoodCard />
        </div>
    );
}

export default PageBody;