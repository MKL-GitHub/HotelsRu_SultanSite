import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';
import goods from "../../data/goods.json";
import IGood from '../../data/IGood';
import { GoodsState } from '../../types/Goods';

import "./App.scss";

export const CartContext = React.createContext<GoodsState>([[], () => {}]);

interface AppProps {

}

const App: FC<AppProps> = () => {
    const goodsCartData = localStorage.getItem("goodsCart");
    
    const [goodsCart, setGoodsCart] = useState<IGood[]>(goodsCartData ? JSON.parse(goodsCartData) :[]);

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goods));
    }, [goods]);

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
