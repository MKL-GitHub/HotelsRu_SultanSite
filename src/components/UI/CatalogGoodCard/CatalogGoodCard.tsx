import { FC } from 'react';
import Button from '../Button/Button';
import IGood from '../../../data/IGood';

import "./CatalogGoodCard.scss";

import groceryСartImg from "./svg/grocery-cart.svg";
import volumeSizeType from "./svg/volume-size-type.svg";
import weightSizeType from "./svg/weight-size-type.svg";


interface CatalogGoodCardProps {
    good: IGood;
}

const CatalogGoodCard: FC<CatalogGoodCardProps> = ({ good }) => {
    const sizeTypeImg = good.size_type === "объем"
        ? volumeSizeType : good.size_type === "вес"
            ? weightSizeType : "";

    return (
        <ul className="CatalogGoodCard">
            <li className="CatalogGoodCard__Image">
                <img src={require(`./images/goods/${good.image_url}`)} alt="Товар" />
            </li>
            <li className="CatalogGoodCard__Size">
                <img src={sizeTypeImg} alt="Тип веса" />
                <span>{good.size}</span>
            </li>
            <li className="CatalogGoodCard__NameDesc">
                <span className="CatalogGoodCard__Name">{good.name}</span>
                <span className="CatalogGoodCard__Description">{good.description}</span>
            </li>
            <li className="CatalogGoodCard__Barcode">
                <span className="CatalogGoodCard__SubTitle">Штрихкод:</span>
                <span>{good.barcode}</span>
            </li>
            <li className="CatalogGoodCard__Manufacturer">
                <span className="CatalogGoodCard__SubTitle">Производитель:</span>
                <span>{good.manufacturer}</span>
            </li>
            <li className="CatalogGoodCard__Brand">
                <span className="CatalogGoodCard__SubTitle">Бренд:</span>
                <span>{good.brand}</span>
            </li>
            <li className="CatalogGoodCard__PriceAndButton">
                <span className="CatalogGoodCard__Price">{good.price}</span>
                <Button className="CatalogGoodCard__ToBasketBtn" text="В корзину" image={groceryСartImg} />
            </li>
        </ul>
    );
}

export default CatalogGoodCard;