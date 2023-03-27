import { Link } from "react-router-dom";
import { ICategoryURL } from "../dictionaries/pageCatetories";

function changeText() {

}

function useLinkListCreator(items: ICategoryURL, changeText: any = null): JSX.Element[] {
    return Object.keys(items).map((item, index) => (
        <li key={index}>
            <Link to={item}>
                {changeText ? changeText(items[item]) : items[item]}
            </Link>
        </li>
    ));
}

export default useLinkListCreator;