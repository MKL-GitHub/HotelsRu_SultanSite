import { FC, useState } from 'react';
import Button from '../Button/Button';

import "./DropDown.scss";

import triangleImg from "../../../svg/triangle.svg";

interface DropDownProps {
    buttonText: string;
    content: React.ReactNode;
    className?: string;
}

const DropDown: FC<DropDownProps> = ({ buttonText, content, className }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleButtonOnClick = () => {
        setIsOpened(!isOpened);
    }

    return (
        <ul className={"DropDown " + className}>
            <li>
                <Button text={buttonText} onClick={handleButtonOnClick} />
                <img src={triangleImg} data-is-opened={isOpened} />
            </li>
            {isOpened && <li>{content}</li>}
        </ul>
    );
}

export default DropDown;