import { FC } from 'react';
import { Link } from 'react-router-dom';

import "./SiteCategories.scss";

interface SiteCategoriesProps {
    className?: string;
}

const SiteCategories: FC<SiteCategoriesProps> = ({ className }) => {
    return (
        <ul className={"SiteCategories " + className}>
            <li><Link to="/household-chemicals">Бытовая химия</Link></li>
            <li><Link to="/cosmetics-and-hygiene">Косметика и гигиена</Link></li>
            <li><Link to="/household-products">Товары для дома</Link></li>
            <li><Link to="/goods-for-children-and-mothers">Товары для детей и мам</Link></li>
            <li><Link to="/dishes">Посуда</Link></li>
        </ul>
    );
}

export default SiteCategories;