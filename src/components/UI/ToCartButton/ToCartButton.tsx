import { FC, useContext } from 'react';
import Button from '../Button/Button';
import { GoodsState } from '../../../types/Goods';
import { CartContext } from '../../App/App';

import "./ToCartButton.scss";

import cartImg from "./svg/grocery-cart.svg";
import IGood from '../../../data/IGood';



interface ToCartButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    good?: IGood;
    quantity?: number;
}

const ToCartButton: FC<ToCartButtonProps> =
    ({ className, onClick, good, quantity = 1 }) => {
        const [goodsCart, setGoodsCart] = useContext<GoodsState>(CartContext);

        const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (good && quantity) {
                let newGoodsList:IGood[] = [...goodsCart];

                for (let i = 0; i< quantity; i++) {
                    newGoodsList.push(good)
                }

                setGoodsCart(newGoodsList);
                localStorage.setItem("goodsCart", JSON.stringify(newGoodsList));
            }

            onClick && onClick(event);
        }

        return <Button
            className={"OrangeButton " + className}
            text={"В корзину"}
            image={cartImg}
            onClick={handleOnClick}
        />;
    }

export default ToCartButton;