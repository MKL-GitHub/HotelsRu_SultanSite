import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';
import IGood from '../../interfaces/IGood';
import { GoodsState } from '../../types/Goods';
import goods from "../../data/goods.json";
import careGoodsTypes from "../../data/careGoodsTypes.json";

import "./App.scss";
// import createCareGoodsTypes from '../../services/createCareGoodsTypes';


export const CartContext = React.createContext<GoodsState>([[], () => { }]);

interface AppProps {

}

const App: FC<AppProps> = () => {
    const goodsCartData = localStorage.getItem("goodsCart");

    const [goodsCart, setGoodsCart] = useState<IGood[]>(goodsCartData ? JSON.parse(goodsCartData) : []);

    useEffect(() => {
        const goodsData: string | null = localStorage.getItem("goods");
        const careGoodsTypesData: string | null = localStorage.getItem("careGoodsTypes");

        if (goodsData && !JSON.parse(goodsData).length) {
            localStorage.setItem('goods', JSON.stringify(
                goods.sort((a, b) => +a.barcode - +b.barcode)));
        }

        if (!careGoodsTypesData) {
            localStorage.setItem("careGoodsTypes", JSON.stringify(careGoodsTypes));
        }
    }, []);

    return (
        <div className="App">
            <CartContext.Provider value={[goodsCart, setGoodsCart]}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </CartContext.Provider>
        </div>
    );
}

export default App;
