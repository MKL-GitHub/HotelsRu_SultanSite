import { FC, useState, useEffect } from 'react';
import { ILocationDict, usePathArray } from '../../hooks/usePathArray';
import { ICategoryURL, goodSubCategories } from '../../dictionaries/pageCatetories';
import Header from '../../components/Header/Header';
import PageNavigationPanel from '../../components/PageNavigationPanel/PageNavigationPanel';
import GoodsSorting from '../../components/GoodsSorting/GoodsSorting';
import SubCategoryBar from '../../components/SubCategoryBar/SubCategoryBar';
import GoodsFilterPanel from '../../components/GoodsFilterPanel/GoodsFilterPanel';
import GoodCardList from '../../components/GoodCardList/GoodCardList';
import Footer from '../../components/Footer/Footer';
import IGood from '../../interfaces/IGood';
import IGoodsFilter from '../../interfaces/IGoodsFilter';
import createCheckboxStates from '../../services/createCheckboxStates';
import createCountedItems from '../../services/createCountedItems';
import compareObjects from '../../services/compareObjects';

import "./CatalogPage.scss";
import "../Page.scss";
import createCareGoodsTypes from '../../services/createCareGoodsTypes';
import IsLoading from '../../components/UI/IsLoading/IsLoading';
import Pagination from '../../components/UI/Pagination/Pagination';
import { getGoodsSortedByParam } from '../../services/goodsSofring';

interface CatalogPageProps {

}

const MAX_GOODS_PER_PAGE = 15;

const CatalogPage: FC<CatalogPageProps> =
    () => {
        const [isDataLoaded, setIsDataLoaded] = useState(false);
        const [goodsData, setGoodsData] = useState<string | null>(null);
        const [allGoodsList, setAllGoodsList] = useState<IGood[]>([])
        const [goodsList, setGoodsList] = useState<IGood[]>([]);
        const [filteredGoodsList, setFilteredGoodsList] = useState<IGood[] | null>(null)
        const [careGoodsTypes, setCareGoodsTypes] = useState<{ [key: number]: string[] }>([]);
        const [countedManufacturers, setCountedManufacturers] = useState<{ [key: string]: number }>({});
        const [countedBrands, setCountedBrands] = useState<{ [key: string]: number }>({});
        const [initialFilterState, setInitialFilterState] = useState<IGoodsFilter | null>(null);
        const [goodsFilter, setGoodsFilter] = useState<IGoodsFilter | null>(null);
        const [pageQuantity, setPageQuantity] = useState<number>(0);
        const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

        useEffect(() => {
            setGoodsData(localStorage.getItem("goods"));
        }, []);

        useEffect(() => {
            if (goodsData) {
                setAllGoodsList(JSON.parse(goodsData));
            }
        }, [goodsData]);

        useEffect(() => {
            const careGoodsTypesData = localStorage.getItem("careGoodsTypes");

            if (careGoodsTypesData) {
                setCareGoodsTypes(JSON.parse(careGoodsTypesData));
            }

            setGoodsList(getGoodsSortedByParam(allGoodsList));
            setIsDataLoaded(true);
        }, [allGoodsList]);

        useEffect(() => {
            const allManufacturers = goodsList.map(good => good.manufacturer);
            const allBrands = goodsList.map(good => good.brand);

            const uniqueManufacturers = Array.from(new Set(allManufacturers));
            const uniqueBrands = Array.from(new Set(allBrands));

            const manufacturers = createCheckboxStates(uniqueManufacturers);
            const brands = createCheckboxStates(uniqueBrands);

            const newInitialFilterState = { priceFrom: "", priceTo: "", manufacturers, brands };

            setCountedManufacturers(createCountedItems(allManufacturers, uniqueManufacturers));
            setCountedBrands(createCountedItems(allBrands, uniqueBrands));

            if (!initialFilterState ||
                !compareObjects(initialFilterState, newInitialFilterState)) {
                setInitialFilterState(newInitialFilterState);
            }
        }, [goodsList]);

        useEffect(() => {
            setGoodsFilter(initialFilterState);
        }, [initialFilterState]);

        const pathArray: ILocationDict = usePathArray();
        const pathValues: string[] = Object.values(pathArray);
        const pathKeys: string[] = Object.keys(pathArray);
        const subCategory: ICategoryURL = goodSubCategories[pathKeys[pathKeys.length - 1]];

        const [categoriesState, setCategoriesState] = useState<{ [key: string]: boolean }>(
            Object.keys(subCategory).reduce((acc, item) => ({ ...acc, [item]: false }), {})
        );

        useEffect(() => {
            const selectedCareTypes = Object.keys(categoriesState).filter(key => categoriesState[key]);

            if (selectedCareTypes.length) {
                const selectedBarcodes = Object.keys(careGoodsTypes)
                    .filter(key => careGoodsTypes[+key].some(item => selectedCareTypes.includes(item)));

                setGoodsList(
                    allGoodsList.filter(good => selectedBarcodes.includes(good.barcode))
                )
            }
            else {
                setGoodsList(allGoodsList);
            }
        }, [categoriesState]);

        useEffect(() => {
            const goodsQuantity = filteredGoodsList ? filteredGoodsList.length : goodsList.length;
            setCurrentPageNumber(1);
            setPageQuantity(Math.ceil(goodsQuantity / MAX_GOODS_PER_PAGE));
        }, [goodsList]);

        useEffect(() => {
            updateGoodsList();
        }, [goodsList]);

        const updateGoodsList = () => {
            if (!goodsFilter || !initialFilterState || compareObjects(goodsFilter, initialFilterState)) {
                setFilteredGoodsList(null);
                return;
            }

            const areManufacturersValid = compareObjects(goodsFilter.manufacturers, initialFilterState.manufacturers);
            const areBrandsValid = compareObjects(goodsFilter.brands, initialFilterState.brands);

            setFilteredGoodsList(goodsList.filter((good) => isValid(good, goodsFilter)));

            function isValid(good: IGood, goodsFilter: IGoodsFilter) {
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
            setFilteredGoodsList(null);
        }

        return (
            <div className="CatalogPage">
                <Header />
                <section className="CatalogPage__Main">
                    <PageNavigationPanel items={pathArray} />
                    <ul className="CatalogPage__TitleBar">
                        <div className="Page__Title">{pathValues[pathValues.length - 1]}</div>
                        <GoodsSorting
                            goodsList={goodsList}
                            setGoodsList={setGoodsList}
                        />
                    </ul>

                    {subCategory &&
                        <div>
                            <SubCategoryBar
                                items={subCategory}
                                itemsState={categoriesState}
                                setItemsState={setCategoriesState}
                            />
                            <ul className="CatalogPage__MainContent">
                                <li><GoodsFilterPanel
                                    subCategory={subCategory}
                                    itemsState={categoriesState}
                                    setItemsState={setCategoriesState}
                                    updateGoodsList={updateGoodsList}
                                    goodsFilter={goodsFilter}
                                    setGoodsFilter={setGoodsFilter}
                                    countedManufacturers={countedManufacturers}
                                    countedBrands={countedBrands}
                                    handleCancelFilterClick={handleCancelFilterClick}
                                /></li>
                                <li className="CatalogPage__Body">
                                    {isDataLoaded
                                        ? <GoodCardList
                                            goods={filteredGoodsList ? filteredGoodsList : goodsList}
                                            currentPageNumber={currentPageNumber}
                                            maxGoodsPerPage={MAX_GOODS_PER_PAGE}
                                        />
                                        : <IsLoading />
                                    }
                                    {pageQuantity > 1 &&
                                        <Pagination
                                            pageQuantity={pageQuantity}
                                            currentPageNumber={currentPageNumber}
                                            setCurrentPageNumber={setCurrentPageNumber}
                                        />}
                                    <div className="CatalogPage__BottomText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                </section>
                <Footer />
            </div>
        );
    }

export default CatalogPage;