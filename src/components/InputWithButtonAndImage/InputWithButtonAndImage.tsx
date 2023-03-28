import {FC} from 'react';

import "./InputWithButtonAndImage.scss";

import searchImg from "./svg/search.svg";

interface InputWithButtonAndImageProps {
    image?: string;
    placeholder?: string;
    className?: string;
}
 
const InputWithButtonAndImage: FC<InputWithButtonAndImageProps> =
    ({image = searchImg, placeholder = "Поиск...", className}) => {
    return ( 
        <div className={"InputWithButtonAndImage " + className}>
            <input type="text" placeholder={placeholder} />
            <button>
                <img src={image} alt="Поиск" />
            </button>
        </div>
     );
}
 
export default InputWithButtonAndImage;