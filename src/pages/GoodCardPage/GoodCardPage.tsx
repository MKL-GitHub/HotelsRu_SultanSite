import { FC, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import PageNavigationPanel from '../../components/PageNavigationPanel/PageNavigationPanel';
import { ILocationDict, usePathArray } from '../../hooks/usePathArray';
import IGood from '../../data/IGood';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Button from '../../components/UI/Button/Button';
import PriceListButton from '../../components/UI/PriceListButton/PriceListButton';

import "./GoodCardPage.scss";
import "../../styles/styles.scss";

import cartImg from "../../svg/cart.svg";
import shareImg from "./svg/share.svg";
import DropDown from '../../components/UI/DropDown/DropDown';
import ToCartButton from '../../components/UI/ToCartButton/ToCartButton';

interface GoodCardPageProps {

}

const GoodCardPage: FC<GoodCardPageProps> = () => {
    const pathArray: ILocationDict = usePathArray();
    const goodBarcode = Object.keys(pathArray).pop();

    const goodsData: string | null = localStorage.getItem("goods");
    let good: IGood | undefined;

    if (goodsData) {
        const goodsList: IGood[] = JSON.parse(goodsData);
        good = goodsList.find(good => good.barcode === goodBarcode);

        if (goodBarcode && good) {
            pathArray[goodBarcode] = `${good.name} ${good.description} ${good.size}`
        }
    }

    const sizeTypeImg = good?.size_type === "вес"
        ? require("../../components/UI/GoodCard/svg/weight-size-type.svg").default
        : require("../../components/UI/GoodCard/svg/volume-size-type.svg").default;

    const goodImg = require("../../components/UI/GoodCard/images/goods/" + good?.image_url);

    const [goodQuantity, setGoodQuantity] = useState<number>(1);
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        if (good) {
            setPrice(parseFloat(good.price) * goodQuantity);
        }
    }, [goodQuantity]);

    return (
        <div className="GoodCardPage">
            <Header />
            <section className="GoodCardPage__Main">
                <PageNavigationPanel items={pathArray} />
                <ul className="GoodCardPage__Good">
                    <li><img src={goodImg} alt="Товар" /></li>
                    <li>
                        <ul className="GoodCardPage__Body">
                            <li className="GoodCardPage__InStock">В наличии</li>
                            <li className="GoodCardPage__Title">
                                <span>{good?.name}</span>
                                <span>{good?.description}</span>
                            </li>
                            <li className="GoodCardPage__Size">
                                <img src={sizeTypeImg} />
                                <span>{good?.size}</span>
                            </li>
                            <li>
                                <ul className="GoodCardPage__PriceQuantity">
                                    <li>{price} ₸</li>
                                    <li><QuantitySelector
                                        quantity={goodQuantity}
                                        setQuantity={setGoodQuantity}
                                    /></li>
                                    <li><ToCartButton 
                                        className="GoodCardPage__ToCartBtn"
                                        good={good}
                                        quantity={goodQuantity}
                                    /></li>
                                </ul>
                            </li>
                            <li>
                                <ul className={"GoodCardPage__WhiteBtns"}>
                                    <li><Button image={shareImg} /></li>
                                    <li><div>
                                        При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
                                    </div></li>
                                    <li><PriceListButton className="GoodCardPage__PriceListBtn" /></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="GoodCardPage__Info">
                                    <li><span>Производитель:</span><span>{good?.manufacturer}</span></li>
                                    <li><span>Бренд:</span><span>{good?.brand}</span></li>
                                    <li><span>Артикул:</span><span>{good?.barcode.slice(0, 6)}</span></li>
                                    <li><span>Штрихкод:</span><span>{good?.barcode}</span></li>
                                </ul>
                            </li>

                            <li>
                                <ul className="DashedUL GoodCardPage__DashedUL">
                                    <li><DropDown
                                        className="GoodCardPage__DropDown GoodCardPage__DropDown_SmallContent"
                                        buttonText={"Описание"}
                                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada. "}
                                    /></li>
                                    <li><DropDown
                                        className="GoodCardPage__DropDown"
                                        buttonText={"Характеристики"}
                                        content={
                                            <ul className="GoodCardPage__Info">
                                                <li><span>Назначение:</span><span>Какое-то назначение</span></li>
                                                <li><span>Тип:</span><span>Какое-то тип</span></li>
                                                <li><span>Производитель:</span><span>{good?.manufacturer}</span></li>
                                                <li><span>Бренд:</span><span>{good?.brand}</span></li>
                                                <li><span>Артикул:</span><span>{good?.barcode.slice(0, 6)}</span></li>
                                                <li><span>Штрихкод:</span><span>{good?.barcode}</span></li>
                                                <li><span>{good?.size_type === "вес" ? "Вес:" : "Объем:"}</span><span>{good?.size}</span></li>
                                            </ul>
                                        }
                                    /></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default GoodCardPage;