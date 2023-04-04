import IGood from "../data/IGood";
import { NameOrPrice, Order } from "../types/sorting";

function getGoodsSortedByParam(
    goods: IGood[],
    param: NameOrPrice = "name",
    order: Order = "desc"
): IGood[] {
    const newGoodsOrder = goods.slice();

    newGoodsOrder.sort((a, b) => param === "name"
        ? order === "desc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        : order === "desc"
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price)
    );

    return newGoodsOrder;
}

export { getGoodsSortedByParam }