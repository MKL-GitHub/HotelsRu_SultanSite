import { FC, useState, useEffect, useContext } from 'react';
import IGood from '../../../data/IGood';
import QuantitySelector from '../../QuantitySelector/QuantitySelector';
import BasketButton from '../BasketButton/BasketButton';
import { CartContext } from '../../App/App';
import { GoodsState } from '../../../types/Goods';

import "./CartGood.scss";
import GoodsSorting from '../../GoodsSorting/GoodsSorting';
import { getGoodsSortedByParam } from '../../../services/goodsSofring';


interface CartGoodProps {
    good: IGood;
    quantity: number;
}

const CartGood: FC<CartGoodProps> = ({ good, quantity }) => {
    const [goods, setGoods] = useContext<GoodsState>(CartContext);
    const [goodQuantity, setGoodQuantity] = useState<number>(quantity);

    useEffect(() => {
        let newGoods: IGood[] = goods.filter(goodItem => goodItem.barcode !== good.barcode);

        for (let i = 0; i < goodQuantity; i++) {
            newGoods.push(good);
        }

        updateGoodsCart(getGoodsSortedByParam(newGoods, "price", 'desc'));
    }, [goodQuantity]);

    const handleBasketOnClick = () => {
        const newGoods: IGood[] = goods.filter(goodItem => goodItem.barcode !== good.barcode);

        updateGoodsCart(newGoods);
    }

    const updateGoodsCart = (goods: IGood[]): void => {
        setGoods(goods);
        localStorage.setItem("goodsCart", JSON.stringify(goods));
    }

    return (
        <ul className="CartGood">
            <li className="CartGood__LeftLI">
                <div><img src={require("../../UI/GoodCard/images/goods/" + good.image_url)} alt="Товар" /></div>
                <ul className="CartGood__GoodBody">
                    <li className="CartGood__GoodSize">
                        <img src={
                            good.size_type === "вес"
                                ? require("../../UI/GoodCard/svg/weight-size-type.svg").default
                                : require("../../UI/GoodCard/svg/volume-size-type.svg").default
                        } />
                        <span>{good.size}</span>
                    </li>
                    <li className="CartGood__NameDescription">{good.name} {good.description}</li>
                    <li className="CartGood__Content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
                    </li>
                </ul>
            </li>
            <li className="CartGood__RightLI">
                <ul className="DashedUL">
                    <li><QuantitySelector quantity={goodQuantity} setQuantity={setGoodQuantity} /></li>
                    <li className="CartGood__Price">{(parseFloat(good.price) * goodQuantity).toFixed(2)} ₸</li>
                    <li><BasketButton onClick={handleBasketOnClick} /></li>
                </ul>
            </li>
        </ul>
    );
}

export default CartGood;