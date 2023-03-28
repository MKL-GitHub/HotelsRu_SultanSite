import { FC } from 'react';

import "./PriceFilter.scss";

interface PriceFilterProps {

}

const PriceFilter: FC<PriceFilterProps> = () => {
    return (
        <ul className="PriceFilter">
            <li className="PriceFilter__Title">
                <span>Цена</span><span>₸</span>
            </li>
            <li>
                <ul className="PriceFilter__Inputs">
                    <li><input type="number" defaultValue={0}/></li>
                    <li>-</li>
                    <li><input type="text" defaultValue={10000}/></li>
                </ul>
            </li>
        </ul>
    );
}

export default PriceFilter;