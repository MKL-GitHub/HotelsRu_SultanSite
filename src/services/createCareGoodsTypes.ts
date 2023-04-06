import { access } from "fs";
import IGood from "../interfaces/IGood";
import { cosmeticsAndHygiene } from "../dictionaries/cosmeticsAndHygiene";

function createCareGoodsTypes(goods: IGood[]): { [key: number]: string[] } {
    const items = Object.keys(cosmeticsAndHygiene);

    return goods
        .map(good => good.barcode)
        .reduce((acc, item) => ({ ...acc, [item]: getRandomItemsList() }), {})

    function getRandomItemsList(): string[] {
        const result: string[] = [];
        const count: number = Math.floor(Math.random() * 6) + 1;

        for (let i = 0; i < count; i++) {
            const index = Math.floor(Math.random() * items.length);
            result.push(items[index]);
        }

        return result;
    }

}

export default createCareGoodsTypes;