import { FC } from 'react';
import Button from '../Button/Button';

import "./Pagination.scss";

import forthBackImg from "./svg/forth_back.svg";


interface PaginationProps {
    pageQuantity: number;
    currentPageNumber: number;
    setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: FC<PaginationProps> =
    ({ pageQuantity, currentPageNumber, setCurrentPageNumber }) => {

        const lis = [];

        for (let i = 1; i <= pageQuantity; i++) {
            lis.push(
                <li
                    key={i}
                    data-current-page={currentPageNumber === i ? true : false}>
                    <Button text={i} onClick={() => handleButtonOnClick(i)} />
                </li>
            )
        }

        const handleButtonOnClick = (currentPageNumber: number) => {
            setCurrentPageNumber(currentPageNumber);
        }

        const handleBackOnClick = () => {
            const newPageNumber = currentPageNumber - 1;

            if (newPageNumber > 0) {
                setCurrentPageNumber(newPageNumber);
            }
        }

        const handleForthOnClick = () => {
            const newPageNumber = currentPageNumber + 1;

            if (newPageNumber <= pageQuantity) {
                setCurrentPageNumber(newPageNumber);
            }
        }

        return (
            <ul className="Pagination">
                <li className="Pagination__Back">
                    <Button
                        image={forthBackImg}
                        onClick={handleBackOnClick}
                    />
                </li>
                {lis}
                <li className="Pagination__Forth">
                    <Button
                        image={forthBackImg}
                        onClick={handleForthOnClick}
                    />
                </li>
            </ul>
        );
    }

export default Pagination;