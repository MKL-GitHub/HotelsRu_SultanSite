import { ChangeEvent, FC, useState, useEffect } from 'react';
import InputWithButton from '../../UI/InputWithButton/InputWithButton';

import "./GoodParamFilter.scss";

import triangleImg from "../../../svg/triangle.svg";
import Checkbox from '../../UI/Checkbox/Checkbox';

interface GoodParamFilterProps {
    title: string;
    items: { [key: string]: boolean };
    onItemChange: (item: string, checked: boolean) => void;
    countedItems: { [key: string]: number };
}

const GoodParamFilter: FC<GoodParamFilterProps> =
    ({ title, items, onItemChange, countedItems }) => {
        const [allItems, setAllItems] = useState<string[]>([]);
        const [firstFourItems, setFirstFourItems] = useState<string[]>([]);

        useEffect(() => {
            setAllItems(Object.keys(items).sort((a, b) => a.localeCompare(b)));
        }, [items]);

        useEffect(() => {
            setFirstFourItems(allItems.slice(0, 4));
        }, [allItems]);

        const [itemsState, setItemsState] = useState<string[]>([])
        const [buttonText, setButtonText] = useState<string>("Показать все");
        const [isOpenedList, setIsOpenedList] = useState<boolean>(false);
        const [searchValue, setSearchValue] = useState<string>("");

        useEffect(() => {
            setItemsState(firstFourItems)
        }, [firstFourItems]);

        function handleButtonClick() {
            if (buttonText === "Показать все") {
                setButtonText("Скрыть");
                setIsOpenedList(true);
                setItemsState(allItems);
                setSearchValue("");
            }
            else {
                setButtonText("Показать все");
                setIsOpenedList(false);
                setItemsState(firstFourItems);
            }
        }

        const handleParamOnChange = (item: string, checked: boolean) => {
            onItemChange(item, checked);
        }

        const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
        }

        const handleInputOnButtonClick = () => {
            setIsOpenedList(false);
            setButtonText("Показать все");
            setItemsState(allItems.filter(item =>
                item.toLowerCase().substring(0, searchValue.length) === searchValue.toLowerCase()
            ).slice(0, 4));
        }

        return (
            <ul className="GoodParamFilter">
                <li className="GoodParamFilter__Title">{title}</li>
                <li><InputWithButton
                    className="GoodParamFilter__Search"
                    value={searchValue}
                    onChange={handleInputOnChange}
                    onButtonClick={handleInputOnButtonClick}
                /></li>
                <li><ul className="GoodParamFilter__CheckBoxList">
                    {itemsState.map((item, index) =>
                        <li key={index} className="GoodParamFilter__CheckBoxItem">
                            <Checkbox
                                checked={items[item]}
                                onChange={(checked) => { handleParamOnChange(item, checked) }}
                                label={<ul>
                                    <li>{item}</li>
                                    <li>{"(" + countedItems[item] + ")"}</li>
                                </ul>}
                            />
                        </li>)
                    }
                </ul></li>
                {allItems.length > 4 &&
                    <li
                        className="GoodParamFilter__ShowAllBtnContainer"
                        data-is-opened={isOpenedList}
                    >
                        <button onClick={handleButtonClick} className="GoodParamFilter__ShowAllBtn">{buttonText}</button>
                        <img src={triangleImg} alt="" id="GoodParamFilterTriangle" />
                    </li>
                }

            </ul>
        );
    }

export default GoodParamFilter;