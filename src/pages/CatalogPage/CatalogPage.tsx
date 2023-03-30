import { FC, useState } from 'react';
import { ILocationDict, usePathArray } from '../../hooks/usePathArray';
import { ICategoryURL, goodSubCategories } from '../../dictionaries/pageCatetories';
import Header from '../../components/Header/Header';
import PageNavigationPanel from '../../components/PageNavigationPanel/PageNavigationPanel';
import GoodsSorting from '../../components/GoodsSorting/GoodsSorting';
import SubCategoryBar from '../../components/SubCategoryBar/SubCategoryBar';
import CategorySelectionPanel from '../../components/CategorySelectionPanel/CategorySelectionPanel';
import GoodCardList from '../../components/GoodCardList/GoodCardList';
import Footer from '../../components/Footer/Footer';
import goods from "../../data/goods.json";
import IGood from '../../data/IGood';
import IGoodsFilter from '../../interfaces/IGoodsFilter';
import createCheckboxStates from '../../services/createCheckboxStates';
import createCountedItems from '../../services/createCountedItems';
import compareObjects from '../../services/compareObjects';

import "./CatalogPage.scss";
import "../Page.scss";




interface CatalogPageProps {

}

const CatalogPage: FC<CatalogPageProps> =
    () => {
        // let filteredGoodList: IGood[] = [];
        const [filteredGoodList, setFilteredGoodList] = useState<IGood[] | null>(null)

        localStorage.setItem('goods', JSON.stringify(goods));
        localStorage.setItem('filteredGoods', JSON.stringify(goods));

        const goodData: string | null = localStorage.getItem("filteredGoods");
        const goodList: IGood[] = goodData ? JSON.parse(goodData) : {};

        const allManufacturers = goodList.map(good => good.manufacturer);
        const allBrands = goodList.map(good => good.brand);

        const uniqueManufacturers = Array.from(new Set(allManufacturers));
        const uniqueBrands = Array.from(new Set(allBrands));

        const manufacturers = createCheckboxStates(uniqueManufacturers);
        const brands = createCheckboxStates(uniqueBrands);

        const countedManufacturers = createCountedItems(allManufacturers, uniqueManufacturers);
        const countedBrands = createCountedItems(allBrands, uniqueBrands);

        const initialFilterState: IGoodsFilter = { priceFrom: "", priceTo: "", manufacturers, brands };
        const [goodsFilter, setGoodsFilter] = useState<IGoodsFilter>(initialFilterState);


        const pathArray: ILocationDict = usePathArray();
        const pathValues: string[] = Object.values(pathArray);
        const pathKeys: string[] = Object.keys(pathArray);
        const subCategory: ICategoryURL = goodSubCategories[pathKeys[pathKeys.length - 1]];

        const [categoriesState, setCategoriesState] = useState<{ [key: string]: boolean }>(
            Object.keys(subCategory).reduce((acc, item) => ({ ...acc, [item]: false }), {})
        );

        const updateGoodsList = () => {
            if (compareObjects(goodsFilter, initialFilterState)) {
                setFilteredGoodList(null);
                return;
            }

            const areManufacturersValid = compareObjects(goodsFilter.manufacturers, initialFilterState.manufacturers);
            const areBrandsValid = compareObjects(goodsFilter.brands, initialFilterState.brands);

            setFilteredGoodList(goodList.filter(isValid));

            function isValid(good: IGood) {
                const price = parseFloat(good.price);
                const { priceFrom, priceTo, manufacturers, brands } = goodsFilter;

                const isPriceValid =
                    (!priceFrom && !priceTo) ||
                    (priceFrom && !priceTo && +priceFrom <= price) ||
                    (!priceFrom && priceTo && +priceTo >= price) ||
                    (priceFrom && priceTo && +priceFrom <= price && +priceTo >= price);

                return (
                    isPriceValid && areManufacturersValid && areBrandsValid ||
                    isPriceValid && !areManufacturersValid && areBrandsValid && manufacturers[good.manufacturer] ||
                    isPriceValid && areManufacturersValid && !areBrandsValid && brands[good.brand] ||
                    isPriceValid && !areManufacturersValid && !areBrandsValid && (manufacturers[good.manufacturer] || brands[good.brand])
                );
            }
        }

        const handleCancelFilterClick = () => {
            setGoodsFilter(initialFilterState);
            setFilteredGoodList(null);
        }

        const handleSubCategoryFilter = (categories: { [key: string]: boolean }) => {
            setCategoriesState(categories);

            console.log(Object.keys(categories).filter(item => categories[item]));
            // setFilteredGoodList(goodList.filter(isValid));
        }

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
                            <SubCategoryBar
                                items={subCategory}
                                itemsState={categoriesState}
                                setItemsState={handleSubCategoryFilter}
                                // setItemsState={setCategoriesState}
                            />
                            <ul className="CatalogPage__MainContent">
                                <li><CategorySelectionPanel
                                    subCategory={subCategory}
                                    itemsState={categoriesState}
                                    setItemsState={handleSubCategoryFilter}
                                    // setItemsState={setCategoriesState}
                                    updateGoodsList={updateGoodsList}
                                    goodsFilter={goodsFilter}
                                    setGoodsFilter={setGoodsFilter}
                                    countedManufacturers={countedManufacturers}
                                    countedBrands={countedBrands}
                                    handleCancelFilterClick={handleCancelFilterClick}
                                /></li>
                                <li><GoodCardList goods={filteredGoodList ? filteredGoodList : goodList} /></li>
                            </ul>
                        </div>
                    }
                </section>
                <Footer />
            </div>
        );
    }

export default CatalogPage;