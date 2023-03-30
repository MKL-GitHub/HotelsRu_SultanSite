import { FC } from 'react';
import { ICategoryURL } from '../../dictionaries/pageCatetories';
import SubCategoryList from '../UI/SubCategoryList/SubCategoryList';

import "./SubCategoryBar.scss";

interface SubCategoryBarProps {
    items: ICategoryURL;
    itemsState: { [key: string]: boolean };
    setItemsState: (itemsState: { [key: string]: boolean }) => void
}

const SubCategoryBar: FC<SubCategoryBarProps> =
    ({ items, itemsState, setItemsState }) => {
        const changeText = (text: string): any => {
            const firstSpaceIndex = text.indexOf(" ");

            return (
                <div>
                    <div>{text.slice(0, firstSpaceIndex)}</div>
                    <div>{text.slice(firstSpaceIndex + 1)}</div>
                </div>
            );
        };

        return (
            <SubCategoryList
                className="SubCategoryBar"
                items={items}
                itemsState={itemsState}
                setItemsState={setItemsState}
                changeText={changeText}
            />
        );
    }

export default SubCategoryBar;