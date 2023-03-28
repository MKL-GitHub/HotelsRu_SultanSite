import { FC } from 'react';
import useLinkListCreator from '../../hooks/useLinkListCreator';
import { ILocationDict } from '../../hooks/usePathArray';

import "./PageNavigationPanel.scss";

interface PageNavigationPanelProps {
    items: ILocationDict;
}

const PageNavigationPanel: FC<PageNavigationPanelProps> = ({ items }) => {
    const lis: JSX.Element[] = useLinkListCreator(items);

    return (
        <ul className="PageNavigationPanel">
            {lis}
        </ul>
    );
}

export default PageNavigationPanel;