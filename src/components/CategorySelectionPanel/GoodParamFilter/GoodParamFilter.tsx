import { FC, useState } from 'react';
import InputWithButtonAndImage from '../../UI/InputWithButtonAndImage/InputWithButtonAndImage';

import "./GoodParamFilter.scss";

import triangleImg from "../../../svg/triangle.svg";

interface GoodParamFilterProps {
    title: string;
    items: string[];
}

const GoodParamFilter: FC<GoodParamFilterProps> =
    ({ title, items }) => {
        const allItems = Array.from(new Set<string>(items)).sort((a, b) => a.localeCompare(b));
        const firstFourItems = allItems.slice(0, 4);

        const [buttonText, setButtonText] = useState<string>("Показать все");
        const [isOpenedList, setIsOpenedList] = useState(false);
        const [uniqueItems, setUniqueItems] = useState<string[]>(firstFourItems);

        function getItemQuantity(item: string): number {
            return items.filter(i => i === item).length;
        }

        function handleButtonClick() {
            if (buttonText === "Показать все") {
                setButtonText("Скрыть");
                setIsOpenedList(true);
                setUniqueItems(allItems);
            }
            else {
                setButtonText("Показать все");
                setIsOpenedList(false);
                setUniqueItems(firstFourItems);
            }
        }

        return (
            <ul className="GoodParamFilter">
                <li className="GoodParamFilter__Title">{title}</li>
                <li><InputWithButtonAndImage className="GoodParamFilter__Search" /></li>
                <li className="GoodParamFilter__CheckBoxList">
                    {uniqueItems.map((item, index) =>
                        <div key={index} className="GoodParamFilter__CheckBoxItem">
                            <input id={item + index} type="checkbox" />
                            <label htmlFor={item + index}>
                                {item}
                                <span>
                                    {"(" + getItemQuantity(item) + ")"}
                                </span>
                            </label>
                        </div>
                    )}
                </li>
                <li
                    className="GoodParamFilter__ShowAllBtnContainer"
                    data-is-opened={isOpenedList}
                >
                    <button onClick={handleButtonClick} className="GoodParamFilter__ShowAllBtn">{buttonText}</button>
                    <img src={triangleImg} alt="" id="GoodParamFilterTriangle" />
                </li>
            </ul>
        );
    }

export default GoodParamFilter;