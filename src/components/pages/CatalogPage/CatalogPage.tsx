import { FC } from 'react';
import { ICategoryURL, pageCategories, subPageCategories } from '../../../dictionaries/pageCatetories';
import { ILocationDict, usePathArray } from '../../../hooks/usePathArray';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import PageNavigationPanel from '../../common/PageNavigationPanel/PageNavigationPanel';
import SiteCategories from '../../common/SiteCategories/SiteCategories';

import "./CatalogPage.scss";
import "../Page.scss";
import GoodsSorting from '../../common/GoodsSorting/GoodsSorting';
import SubCategoryBar from '../../common/SubCategoryBar/SubCategoryBar';
import CategorySelectionPanel from '../../common/CategorySelectionPanel/CategorySelectionPanel';
import PageBody from '../../common/PageBody/PageBody';

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
                                <CategorySelectionPanel />
                                <PageBody />
                            </ul>
                        </div>
                    }
                </section>
                <Footer />
            </div>
        );
    }

export default CatalogPage;