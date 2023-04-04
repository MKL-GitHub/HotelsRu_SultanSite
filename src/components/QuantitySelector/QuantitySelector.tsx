import { FC, useState } from 'react';

import "./QuantitySelector.scss";
import Button from '../UI/Button/Button';

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({quantity, setQuantity}) => {
    const handleReduceButton = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
        
    }

    const handleAddButton = () => {
        setQuantity(quantity + 1);
    }

    return (
        <ul className="QuantitySelector">
            <li><Button text={"-"} onClick={handleReduceButton}/></li>
            <li>{quantity}</li>
            <li><Button text={"+"} onClick={handleAddButton}/></li>
        </ul>
    );
}

export default QuantitySelector;