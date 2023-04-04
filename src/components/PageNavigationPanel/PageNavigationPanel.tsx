import { FC } from 'react';
import { ILocationDict } from '../../hooks/usePathArray';
import { Link } from 'react-router-dom';

import "./PageNavigationPanel.scss";

interface PageNavigationPanelProps {
    items: ILocationDict;
}

const PageNavigationPanel: FC<PageNavigationPanelProps> = ({ items }) => {
    const lastIndex = Object.keys(items).length - 1;

    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number): void => {
        if (index === lastIndex) {
            event.preventDefault();
        }
    }

    return (
        <ul className="PageNavigationPanel">
            {Object.keys(items).map((item, index) => (
                <li key={index}>
                    <Link
                        to={item === "/" ? "/" : "/" + item}
                        onClick={(e) => handleOnClick(e, index)}
                    >
                        {items[item]}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PageNavigationPanel;