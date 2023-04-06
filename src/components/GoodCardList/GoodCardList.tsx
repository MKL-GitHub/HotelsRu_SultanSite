import { FC } from 'react';
import IGood from '../../interfaces/IGood';
import GoodCard from '../UI/GoodCard/GoodCard';


import "./GoodCardList.scss";

interface GoodCardListProps {
    goods: IGood[] | null;
    currentPageNumber: number;
    maxGoodsPerPage: number;
}

const PageBody: FC<GoodCardListProps> =
    ({ goods, currentPageNumber, maxGoodsPerPage }) => {
        const startIndex = (currentPageNumber - 1) * maxGoodsPerPage;
        const endIndex = Math.min(goods ? goods.length : 0, currentPageNumber * maxGoodsPerPage);

        return (
            <ul className="GoodCardList">
                {goods?.slice(startIndex, endIndex)
                    .map((good, index) =>
                        <li key={index}><GoodCard good={good} /></li>
                    )}
            </ul>
        );
    }

export default PageBody;