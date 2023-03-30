import { FC } from 'react';
import IGood from '../../data/IGood';
import CatalogGoodCard from '../UI/CatalogGoodCard/CatalogGoodCard';


import "./GoodCardList.scss";

interface PageBodyProps {
    goods: IGood[] | null;
}

const PageBody: FC<PageBodyProps> = ({ goods }) => {
    return (
        <ul className="GoodCardList">
            {goods &&
                goods.map((good, index) =>
                    <li key={index}><CatalogGoodCard good={good} /></li>
                )
            }
        </ul>
    );
}

export default PageBody;