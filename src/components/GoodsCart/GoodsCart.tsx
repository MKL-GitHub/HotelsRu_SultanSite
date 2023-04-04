import { FC, useEffect, useState, useContext } from 'react';
import { CartContext } from "../App/App";
import { Link } from 'react-router-dom';
import { GoodsState } from '../../types/Goods';

import "./GoodsCart.scss";

import groceryCartImg from "./svg/grocery-cart.svg";


interface GoodsCartProps {

}

const GoodsCart: FC<GoodsCartProps> = () => {
    const [goodsCart] = useContext<GoodsState>(CartContext);

    const [price, setPrice] = useState<number>(0);
    const [goodsQuantity, setGoodsQuantity] = useState<number>(0);

    useEffect(() => {
        setPrice(goodsCart.reduce((acc, val) => acc + parseFloat(val.price), 0));
        setGoodsQuantity(goodsCart.length);
    }, [goodsCart]);

    return (
        <Link to="/goods-cart">
            <ul className="GoodsCart">
                <li>
                    <img src={groceryCartImg} alt="Корзина" />
                    {goodsQuantity > 0 &&
                        <span className="GoodsCart__SelectedItemsQuantity">{goodsQuantity}</span>
                    }
                </li>
                <li>
                    <span>Корзина</span>
                    <span>{Math.round(price)} ₸</span>
                </li>
            </ul>
        </Link>

    );
}

export default GoodsCart;