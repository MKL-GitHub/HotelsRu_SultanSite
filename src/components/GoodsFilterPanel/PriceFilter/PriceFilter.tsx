import { FC } from 'react';
import IGoodsFilter from '../../../interfaces/IGoodsFilter';
import NumberInput from '../../UI/NumberInput/NumberInput';

import "./PriceFilter.scss";

interface PriceFilterProps {
    goodsFilter: IGoodsFilter | null;
    setGoodsFilter: React.Dispatch<React.SetStateAction<IGoodsFilter | null>>;
}

const PriceFilter: FC<PriceFilterProps> =
    ({ goodsFilter, setGoodsFilter }) => {
        const handlePriceOnChange = (prop: "priceTo" | "priceFrom", value: string | undefined) => {
            setGoodsFilter(goodsFilter
                ? { ...goodsFilter, [prop]: value }
                : null
            )
        }

        return (
            <ul className="PriceFilter">
                <li className="PriceFilter__Title">
                    <span>Цена</span><span>₸</span>
                </li>
                <li>
                    <ul className="PriceFilter__Inputs">
                        <li><NumberInput
                            value={goodsFilter?.priceFrom}
                            onChange={(value) => handlePriceOnChange("priceFrom", value)}
                        /></li>
                        <li>-</li>
                        <li><NumberInput
                            value={goodsFilter?.priceTo}
                            onChange={(value) => handlePriceOnChange("priceTo", value)}
                        /></li>
                    </ul>
                </li>
            </ul>
        );
    }

export default PriceFilter;