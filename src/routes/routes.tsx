import { FC, ReactElement } from 'react';
import { Navigate } from "react-router-dom";
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

interface routesProps {
    path: string;
    Component?: FC;
    element?: ReactElement;
}

export const routes: Array<routesProps> = [
    { path: "/", Component: HomePage },
    { path: "/household-chemicals", Component: CatalogPage },
    { path: "/cosmetics-and-hygiene", Component: CatalogPage },
    { path: "/household-products", Component: CatalogPage },
    { path: "/goods-for-children-and-mothers", Component: CatalogPage },
    { path: "/dishes", Component: CatalogPage },

    // { path: "/", element: <Navigate to={"/catalog"}/> },
    // { path: "/product-card", Component: ProductCard },
    // { path: "/products-basket", Component: ProductsBasket },
    // { path: "/catalog", Component: CatalogPage },
    { path: "/*", Component: NotFoundPage },
]