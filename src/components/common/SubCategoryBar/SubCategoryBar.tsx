import { FC } from 'react';
import { ICategoryURL } from '../../../dictionaries/pageCatetories';
import useLinkListCreator from '../../../hooks/useLinkListCreator';

import "./SubCategoryBar.scss";

interface SubCategoryBarProps {
    items: ICategoryURL;
}

const SubCategoryBar: FC<SubCategoryBarProps> = ({ items }) => {
    const lis: JSX.Element[] = useLinkListCreator(items, changeText);

    return (
        <ul className="SubCategoryBar">
            {lis}
        </ul>
    );

    function changeText(text: any): any {
        const firstSpaceIndex = text.indexOf(" ");

        return (
            <div>
                <div>{text.slice(0, firstSpaceIndex)}</div>
                <div>{text.slice(firstSpaceIndex + 1)}</div>
            </div>
        );
    }
}

export default SubCategoryBar;