import { FC } from 'react';

import "./Basket.scss";

import basketImg from "./svg/basket.svg";

interface BasketProps {

}

const Basket: FC<BasketProps> = () => {
    return (
        <div className="Basket">
            <button>
                <img src={basketImg} alt="Корзина" />
                <span className="Basket__SelectedItemsQuantity">3</span>
            </button>
            <div>
                <span>Корзина</span>
                <span>12 478 ₸</span>
            </div>
        </div>
    );
}

export default Basket;