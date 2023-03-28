import { FC } from 'react';
import GoodParamFilter from './GoodParamFilter/GoodParamFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import goods from "../../data/goods.json";

import "./CategorySelectionPanel.scss";

interface CategorySelectionPanelProps {

}

const CategorySelectionPanel: FC<CategorySelectionPanelProps> = () => {
    return (
        <ul className="CategorySelectionPanel">
            <li className="CategorySelectionPanel__Title">ПОДБОР ПО ПАРАМЕТРАМ</li>
            <li><PriceFilter /></li>
            <ul className="CategorySelectionPanel_GroupWidthDashedLine">
                <li><GoodParamFilter title="Производитель" items={goods.map(good => good.manufacturer)} /></li>
                <li><GoodParamFilter title="Бренд" items={goods.map(good => good.brand)} /></li>
            </ul>
            <ul className="CategorySelectionPanel__ShowHideBtns">
                <button>show</button>
                <button>hide</button>
            </ul>
            <ul className="CategorySelectionPanel_GroupWidthDashedLine CategorySelectionPanel__SubCategoriesList">
                <li>22</li>
                <li>12</li>
            </ul>
        </ul>
    );
}

export default CategorySelectionPanel;