import { FC } from 'react';
import CatalogGoodCard from '../CatalogGoodCard/CatalogGoodCard';
import goods from "../../data/goods.json";

import "./PageBody.scss";

interface PageBodyProps {

}

const PageBody: FC<PageBodyProps> = () => {
    return (
        <div className="PageBody">
            <div className="PageBody__Cards">
                {goods.map((good, index) =>
                    <CatalogGoodCard key={index} good={good} />
                )}
            </div>

        </div>
    );
}

export default PageBody;