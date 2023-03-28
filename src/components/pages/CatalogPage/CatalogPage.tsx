import { FC } from 'react';
import { ICategoryURL, subPageCategories } from '../../../dictionaries/pageCatetories';
import { ILocationDict, usePathArray } from '../../../hooks/usePathArray';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SubCategoryBar from '../../SubCategoryBar/SubCategoryBar';
import PageNavigationPanel from '../../PageNavigationPanel/PageNavigationPanel';
import GoodsSorting from '../../GoodsSorting/GoodsSorting';
import CategorySelectionPanel from '../../CategorySelectionPanel/CategorySelectionPanel';
import PageBody from '../../PageBody/PageBody';

import "./CatalogPage.scss";
import "../Page.scss";

interface CatalogPageProps {

}

const CatalogPage: FC<CatalogPageProps> =
    () => {
        const pathArray: ILocationDict = usePathArray();
        const pathValues: string[] = Object.values(pathArray);
        const pathKeys: string[] = Object.keys(pathArray);
        const subCategory: ICategoryURL | undefined = subPageCategories[pathKeys[pathKeys.length - 1]];

        return (
            <div className="CatalogPage">
                <Header />
                <section className="CatalogPage__Main">
                    <PageNavigationPanel items={pathArray} />
                    <ul className="CatalogPage__TitleBar">
                        <div className="Page__Title">{pathValues[pathValues.length - 1]}</div>
                        <GoodsSorting />
                    </ul>

                    {subCategory &&
                        <div>
                            <SubCategoryBar items={subCategory} />
                            <ul className="CatalogPage__MainContent">
                                <li><CategorySelectionPanel /></li>
                                <li><PageBody /></li>
                            </ul>
                        </div>
                    }
                </section>
                <Footer />
            </div>
        );
    }

export default CatalogPage;