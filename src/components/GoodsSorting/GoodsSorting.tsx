import { FC, useState, useEffect } from 'react';

import "./GoodsSorting.scss";

import triangleImg from "../../svg/triangle.svg";
import IGood from '../../data/IGood';
import { getGoodsSortedByParam } from '../../services/goodsSofring';
import { NameOrPrice, Order } from '../../types/sorting';
import Button from '../UI/Button/Button';

interface GoodsSortingProps {
    goodsList: IGood[];
    setGoodsList: React.Dispatch<React.SetStateAction<IGood[]>>;
}

const GoodsSorting: FC<GoodsSortingProps> =
    ({ goodsList, setGoodsList }) => {
        const [isAscOrder, setIsAscOrder] = useState<boolean>(false);
        const [sortParam, setSortParam] = useState<NameOrPrice>("name");

        useEffect(() => {
            setGoodsList(getGoodsSortedByParam(goodsList, sortParam, isAscOrder ? "asc" : "desc"));
        }, [isAscOrder, sortParam]);

        const handleSelectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSortParam(event.target.value === "name" ? "name" : "price");
        }

        const handleOrderChange = () => {
            setIsAscOrder(!isAscOrder);
        }

        return (
            <ul className="GoodsSorting">
                <li className="GoodsSorting__Title">Сортировка:</li>
                <li className="GoodsSorting__SelectParam">
                    <select name="" id=""
                        onChange={handleSelectOnChange}
                    >
                        <option value="name">Название</option>
                        <option value="price">Цена</option>
                    </select>
                </li>
                <li className="GoodsSorting__Order" data-is-asc-order={isAscOrder}>
                    <Button
                        image={triangleImg}
                        onClick={handleOrderChange}
                    />
                </li>
            </ul>
        );
    }

export default GoodsSorting;