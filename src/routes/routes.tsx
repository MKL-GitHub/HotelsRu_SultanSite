import { FC, ReactElement } from 'react';
import { Navigate } from "react-router-dom";
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import GoodCardPage from '../pages/GoodCardPage/GoodCardPage';
import GoodsCartPage from '../pages/GoodsCartPage/GoodsCartPage';
import AdminPage from '../pages/AdminPage/AdminPage';

interface routesProps {
    path: string;
    Component?: FC;
    element?: ReactElement;
}

export const routes: Array<routesProps> = [
    // { path: "/", element: <Navigate to={"/catalog"}/> },
    { path: "/", Component: HomePage },

    { path: "/admin", Component: AdminPage },

    { path: "/goods-cart", Component: GoodsCartPage },

    { path: "/household-chemicals", Component: CatalogPage },
    { path: "/cosmetics-and-hygiene", Component: CatalogPage },
    { path: "/household-products", Component: CatalogPage },
    { path: "/goods-for-children-and-mothers", Component: CatalogPage },
    { path: "/dishes", Component: CatalogPage },

    { path: "/cosmetics-and-hygiene/*", Component: GoodCardPage },

    { path: "/*", Component: NotFoundPage },
]