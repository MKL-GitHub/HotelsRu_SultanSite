import { FC, ReactElement } from 'react';
import { Navigate } from "react-router-dom";
import PageNotFound from "../components/pages/PageNotFound/PageNotFound";
import ProductCard from "../components/pages/ProductCard/ProductCard";
import ProductsBasket from "../components/pages/ProductsBasket/ProductsBasket";
import ProductsCatalog from "../components/pages/ProductsCatalog/ProductsCatalog";

interface routesProps {
    path: string;
    Component?: FC;
    element?: ReactElement;
}

export const routes: Array<routesProps> = [
    { path: "/", element: <Navigate to={"/products-catalog"}/> },
    { path: "/product-card", Component: ProductCard },
    { path: "/products-basket", Component: ProductsBasket },
    { path: "/products-catalog", Component: ProductsCatalog },
    { path: "/*", Component: PageNotFound },
]