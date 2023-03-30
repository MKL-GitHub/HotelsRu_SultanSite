import { cosmeticsAndHygiene } from "./cosmeticsAndHygiene";

export interface ICategoryURL {
    [key: string]: string;
}

export interface ISubCategoryURL {
    [key: string]: ICategoryURL;
}

export const goodCategories: ICategoryURL = {
    "household-chemicals": "Бытовая химия",
    "cosmetics-and-hygiene": "Косметика и гигиена",
    "household-products": "Товары для дома",
    "goods-for-children-and-mothers": "Товары для детей и мам",
    "dishes": "Посуда",
};

export const goodSubCategories: ISubCategoryURL = {
    "cosmetics-and-hygiene": cosmeticsAndHygiene,
}