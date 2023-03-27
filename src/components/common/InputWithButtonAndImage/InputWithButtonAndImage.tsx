import {FC} from 'react';

import "./InputWithButtonAndImage.scss";

interface InputWithButtonAndImageProps {
    image: string;
    placeholder: string;
}
 
const InputWithButtonAndImage: FC<InputWithButtonAndImageProps> =
    ({image, placeholder}) => {
    return ( 
        <div className="InputWithButtonAndImage">
            <input type="text" placeholder={placeholder} />
            <button>
                <img src={image} alt="Поиск" />
            </button>
        </div>
     );
}
 
export default InputWithButtonAndImage;