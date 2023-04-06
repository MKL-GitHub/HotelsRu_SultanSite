import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import IGood from '../../../interfaces/IGood';
import { Link } from 'react-router-dom';
import ToCartButton from '../ToCartButton/ToCartButton';

import "./GoodCard.scss";

import volumeSizeType from "./svg/volume-size-type.svg";
import weightSizeType from "./svg/weight-size-type.svg";

interface GoodCardProps {
    good: IGood;
}

const GoodCard: FC<GoodCardProps> = ({ good }) => {
    const sizeTypeImg = good.size_type === "объем"
        ? volumeSizeType : good.size_type === "вес"
            ? weightSizeType : "";

    const location = useLocation();


    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <Link to={location.pathname + `/${good.barcode}`}>
            <ul className="GoodCard">
                <li className="GoodCard__Image">
                    <img src={require(`./images/goods/${good.image_url}`)} alt="Товар" />
                </li>
                <li className="GoodCard__Size">
                    <img src={sizeTypeImg} alt="Тип веса" />
                    <span>{good.size}</span>
                </li>
                <li className="GoodCard__NameDesc">
                    <span className="GoodCard__Name">{good.name}</span>
                    <span className="GoodCard__Description">{good.description}</span>
                </li>
                <li className="GoodCard__Barcode">
                    <span className="GoodCard__SubTitle">Штрихкод:</span>
                    <span>{good.barcode}</span>
                </li>
                <li className="GoodCard__Manufacturer">
                    <span className="GoodCard__SubTitle">Производитель:</span>
                    <span>{good.manufacturer}</span>
                </li>
                <li className="GoodCard__Brand">
                    <span className="GoodCard__SubTitle">Бренд:</span>
                    <span>{good.brand}</span>
                </li>
                <li className="GoodCard__PriceAndButton">
                    <span className="GoodCard__Price">{good.price} ₸</span>
                    <ToCartButton
                        className="GoodCard__ToCartBtn"
                        onClick={handleAddToCart}
                        good={good}
                    />
                </li>
            </ul>
        </Link>

    );
}

export default GoodCard;