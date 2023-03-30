import { useLocation } from 'react-router-dom';
import { goodCategories } from '../dictionaries/pageCatetories';

export interface ILocationDict {
    [key: string]: string;
}

export function usePathArray(): ILocationDict {
    const locations = useLocation().pathname.split('/').filter(item => item !== '');
    let locationsDict: ILocationDict = { "/": "Главная" };

    for (let location of locations) {
        locationsDict[location] = goodCategories[location];
    }

    return locationsDict;
}
