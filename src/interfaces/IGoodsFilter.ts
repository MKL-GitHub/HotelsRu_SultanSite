interface IGoodsFilter {
    priceFrom: string;
    priceTo: string;
    manufacturers: { [key: string]: boolean };
    brands: { [key: string]: boolean };
}

export default IGoodsFilter;