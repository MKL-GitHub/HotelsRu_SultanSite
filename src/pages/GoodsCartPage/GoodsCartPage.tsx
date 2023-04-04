import { FC, useState, useEffect, useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageNavigationPanel from '../../components/PageNavigationPanel/PageNavigationPanel';
import { ILocationDict, usePathArray } from '../../hooks/usePathArray';
import Button from '../../components/UI/Button/Button';
import IGood from '../../data/IGood';
import CartGood from '../../components/UI/CartGood/CartGood';
import { GoodsState } from '../../types/Goods';
import { CartContext } from '../../components/App/App';

import "./GoodsCartPage.scss";

interface GoodsCartPageProps {

}

const GoodsCartPage: FC<GoodsCartPageProps> = () => {
    const pathArray: ILocationDict = usePathArray();

    pathArray["goods-cart"] = "Корзина";

    const [goods, setGoods] = useContext<GoodsState>(CartContext);
    const [uniqueGoods, setUniqueGoods] = useState<IGood[]>([]);
    const [price, setPrice] = useState<number>(0);
    const [isOrderCompleted, setIsOrderCompleted] = useState<boolean>(false);

    useEffect(() => {
        setUniqueGoods(
            goods.filter((good, index, self) =>
                index === self.findIndex((t) => t.barcode === good.barcode)
            )
        );
    }, [goods]);

    useEffect(() => {
        setPrice(
            uniqueGoods.map(uniqueGood =>
                goods.filter(good => good.barcode === uniqueGood.barcode).length * parseFloat(uniqueGood.price)
            )
                .reduce((acc, item) => acc + item, 0)
        )
    }, [uniqueGoods]);

    const handlePlaceOrderOnClick = () => {
        if (goods.length) {
            setIsOrderCompleted(true);
            setGoods([]);
            localStorage.removeItem("goodsCart");
        }
    }

    return (
        <div className="GoodsCartPage">
            <Header />
            <section>
                <PageNavigationPanel items={pathArray} />

                <ul className="GoodsCartPage__UL DashedUL">
                    <li className="GoodsCartPage__Title">
                        {pathArray["goods-cart"]}
                    </li>

                    {!isOrderCompleted
                        ?


                        <>
                            {uniqueGoods.map(uniqueGood => {
                                const quantity: number = goods.filter(good => good.barcode === uniqueGood.barcode).length;

                                return <li className="GoodsCartPage__LI" key={uniqueGood.barcode}>
                                    <CartGood good={uniqueGood} quantity={quantity} />
                                </li>
                            })}
                            <li>
                                <ul className="GoodsCartPage__LastRow">
                                    <li><Button
                                        className="GoodsCartPage__PlaceOrderBtn OrangeButton"
                                        text={"Оформить заказ"}
                                        onClick={handlePlaceOrderOnClick}
                                    /></li>
                                    <li className="GoodsCartPage__OrderPrice">{price.toFixed(2)} ₸</li>
                                </ul>
                            </li>
                        </>
                        :
                        <div className="GoodsCartPage__OrderCompleted">
                            Спасибо за заказ!
                        </div>
                    }
                </ul>
            </section>
            <Footer />
        </div>
    );
}

export default GoodsCartPage;

