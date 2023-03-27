import { FC } from 'react';

import "./CatalogGoodCard.scss";

import goodImg from "../../../images/goods/aos_1.png";

interface CatalogGoodCardProps {

}

const CatalogGoodCard: FC<CatalogGoodCardProps> = () => {
    return (
        <ul>
            <li><img src={goodImg} alt="Товар" /></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
}

export default CatalogGoodCard;