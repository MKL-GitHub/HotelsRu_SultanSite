import { FC } from 'react';

import "./GoodsSorting.scss";

import triangleImg from "../../svg/triangle.svg";

interface GoodsSortingProps {

}

const GoodsSorting: FC<GoodsSortingProps> = () => {
    return (
        <ul className="GoodsSorting">
            <li className="GoodsSorting__Title">Сортировка:</li>
            <li>
                <select name="" id="">
                    <option value="name">Название</option>
                    <option value="price">Цена</option>
                    <option value="ascending">По возрастанию</option>
                    <option value="descending">По убыванию</option>
                </select>
            </li>
            <li><img src={triangleImg} alt="Стрелка" /></li>
        </ul>
    );
}

export default GoodsSorting;