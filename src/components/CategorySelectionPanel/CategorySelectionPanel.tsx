import { FC } from 'react';
import GoodParamFilter from './GoodParamFilter/GoodParamFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import BasketButton from '../UI/BasketButton/BasketButton';
import Button from '../UI/Button/Button';
import { ICategoryURL } from '../../dictionaries/pageCatetories';

import "./CategorySelectionPanel.scss";
import SubCategoryList from '../UI/SubCategoryList/SubCategoryList';
import IGoodsFilter from '../../interfaces/IGoodsFilter';

interface CategorySelectionPanelProps {
    subCategory: ICategoryURL;
    itemsState: { [key: string]: boolean };
    setItemsState: (itemsState: { [key: string]: boolean }) => void;
    updateGoodsList: () => void;
    handleCancelFilterClick: () => void;
    goodsFilter: IGoodsFilter;
    setGoodsFilter: React.Dispatch<React.SetStateAction<IGoodsFilter>>;
    countedManufacturers: { [key: string]: number };
    countedBrands: { [key: string]: number };
}

const CategorySelectionPanel: FC<CategorySelectionPanelProps> = (props) => {
    function handleCheckboxChange(prop: "manufacturers" | "brands", item: string, checked: boolean) {
        props.setGoodsFilter({
            ...props.goodsFilter,
            [prop]: {
                ...props.goodsFilter[prop],
                [item]: checked
            }
        });
    }

    return (
        <ul className="CategorySelectionPanel">
            <li className="CategorySelectionPanel__Title">ПОДБОР ПО ПАРАМЕТРАМ</li>
            <li><PriceFilter
                goodsFilter={props.goodsFilter}
                setGoodsFilter={props.setGoodsFilter}
            /></li>
            <ul className="CategorySelectionPanel_GroupWidthDashedLine">
                <li><GoodParamFilter
                    title="Производитель"
                    items={props.goodsFilter.manufacturers}
                    onItemChange={(item, checked) => handleCheckboxChange("manufacturers", item, checked)}
                    countedItems={props.countedManufacturers}
                /></li>
                <li><GoodParamFilter
                    title="Бренд"
                    items={props.goodsFilter.brands}
                    onItemChange={(item, checked) => handleCheckboxChange("brands", item, checked)}
                    countedItems={props.countedBrands}
                /></li>
            </ul>
            <ul className="CategorySelectionPanel__ShowHideBtns">
                <li><Button
                    text="Показать"
                    className="CategorySelectionPanel__ShowBtn"
                    onClick={props.updateGoodsList}
                /></li>
                <li><BasketButton onClick={props.handleCancelFilterClick}/></li>
            </ul>
            <SubCategoryList
                className="CategorySelectionPanel_GroupWidthDashedLine SubCategoriesList"
                items={props.subCategory}
                itemsState={props.itemsState}
                setItemsState={props.setItemsState}
            />
        </ul>
    );
}

export default CategorySelectionPanel;