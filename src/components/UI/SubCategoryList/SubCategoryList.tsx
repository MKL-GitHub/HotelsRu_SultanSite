import { FC } from 'react';
import { ICategoryURL } from '../../../dictionaries/pageCatetories';
import Checkbox from '../Checkbox/Checkbox';

interface SubCategoryListProps {
    className?: string;
    items: ICategoryURL;
    itemsState: { [key: string]: boolean };
    setItemsState: (itemsState: { [key: string]: boolean }) => void;
    changeText?: any;
}

const SubCategoryList: FC<SubCategoryListProps> =
    ({ className, items, itemsState, setItemsState, changeText }) => {

        const handleOnChange = (isChecked: boolean, itemKey: string) => {
            setItemsState({ ...itemsState, [itemKey]: isChecked });
        };
        
        return (
            <ul className={className}>
                {Object.keys(items).map((item, index) => (
                    <li key={index} data-is-checked={itemsState[item]}>
                        <Checkbox
                            label={changeText ? changeText(items[item]) : items[item]}
                            checked={itemsState[item]}
                            onChange={(isChecked) => handleOnChange(isChecked, item)}
                        />
                    </li>
                ))}
            </ul>
        );
    }

export default SubCategoryList;