import { FC } from 'react';
import GoodParamFilter from './GoodParamFilter/GoodParamFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import BasketButton from '../UI/BasketButton/BasketButton';
import Button from '../UI/Button/Button';
import { ICategoryURL } from '../../dictionaries/pageCatetories';

import "./GoodsFilterPanel.scss";
import SubCategoryList from '../UI/SubCategoryList/SubCategoryList';
import IGoodsFilter from '../../interfaces/IGoodsFilter';

interface GoodsFilterPanelProps {
    subCategory: ICategoryURL;
    itemsState: { [key: string]: boolean };
    setItemsState: (itemsState: { [key: string]: boolean }) => void;
    updateGoodsList: () => void;
    handleCancelFilterClick: () => void;
    goodsFilter: IGoodsFilter | null;
    setGoodsFilter: React.Dispatch<React.SetStateAction<IGoodsFilter | null>>;
    countedManufacturers: { [key: string]: number };
    countedBrands: { [key: string]: number };
}

const GoodsFilterPanel: FC<GoodsFilterPanelProps> = (props) => {

    function handleCheckboxChange(prop: "manufacturers" | "brands", item: string, checked: boolean) {
        props.setGoodsFilter(props.goodsFilter
            ? {
                ...props.goodsFilter,
                [prop]: {
                    ...props.goodsFilter[prop],
                    [item]: checked
                }
            }
            : null
        );
    }

    return (
        <ul className="GoodsFilterPanel">
            <li className="GoodsFilterPanel__Title">ПОДБОР ПО ПАРАМЕТРАМ</li>
            <li><PriceFilter
                goodsFilter={props.goodsFilter}
                setGoodsFilter={props.setGoodsFilter}
            /></li>
            <ul className="GoodsFilterPanel_GroupWidthDashedLine">
                <li><GoodParamFilter
                    title="Производитель"
                    items={props.goodsFilter?.manufacturers
                        ? props.goodsFilter.manufacturers
                        : {}}
                    onItemChange={(item, checked) => handleCheckboxChange("manufacturers", item, checked)}
                    countedItems={props.countedManufacturers}
                /></li>
                <li><GoodParamFilter
                    title="Бренд"
                    items={props.goodsFilter?.brands
                        ? props.goodsFilter.brands
                        : {}}
                    onItemChange={(item, checked) => handleCheckboxChange("brands", item, checked)}
                    countedItems={props.countedBrands}
                /></li>
            </ul>
            <ul className="GoodsFilterPanel__ShowHideBtns">
                <li><Button
                    text="Показать"
                    className="OrangeButton GoodsFilterPanel__ShowBtn"
                    onClick={props.updateGoodsList}
                /></li>
                <li><BasketButton onClick={props.handleCancelFilterClick} /></li>
            </ul>
            <SubCategoryList
                className="GoodsFilterPanel_GroupWidthDashedLine SubCategoriesList"
                items={props.subCategory}
                itemsState={props.itemsState}
                setItemsState={props.setItemsState}
            />
        </ul>
    );
}

export default GoodsFilterPanel;