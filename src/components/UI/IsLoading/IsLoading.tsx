import {FC} from 'react';

import "./IsLoading.scss";

interface IsLoadingProps {
    
}
 
const IsLoading: FC<IsLoadingProps> = () => {
    return ( 
        <ul className="IsLoading">
            <li className="IsLoading__Text">Данные грузятся</li>
            <li className="IsLoading__Circle"></li>
        </ul>
     );
}
 
export default IsLoading;