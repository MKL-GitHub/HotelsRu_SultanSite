import { FC } from 'react';
import Header from '../../common/Header/Header';

import "./ProductsCatalog.scss";
// import styles from "./ProductsCatalog.module.scss";

interface ProductsCatalogProps {

}

const ProductsCatalog: FC<ProductsCatalogProps> = () => {
    return (
        <div className="ProductsCatalog Page">
            <Header />
        </div>
    );
}

export default ProductsCatalog;