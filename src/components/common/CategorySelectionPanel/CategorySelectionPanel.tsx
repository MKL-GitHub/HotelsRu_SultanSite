import { FC } from 'react';

import "./CategorySelectionPanel.scss";

interface CategorySelectionPanelProps {

}

const CategorySelectionPanel: FC<CategorySelectionPanelProps> = () => {
    return (
        <ul className="CategorySelectionPanel">
            Category selection panel
        </ul>
    );
}

export default CategorySelectionPanel;