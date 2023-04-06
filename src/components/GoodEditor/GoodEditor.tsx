import { FC, useState, useEffect, ChangeEvent } from 'react';

import "./GoodEditor.scss";
import IGood from '../../interfaces/IGood';
import TextInput from '../UI/TextInput/TextInput';
import TextArea from '../UI/TextArea/TextArea';
import Button from '../UI/Button/Button';
import GoodProperty from '../../types/GoodProperty';
import Select from '../UI/Select/Select';
import { cosmeticsAndHygiene } from '../../dictionaries/cosmeticsAndHygiene';
import MultiSelect from '../UI/MultiSelect/MultiSelect';

interface GoodEditorProps {
    className?: string;
    good: IGood;
    goods: IGood[];
    setGoods: React.Dispatch<React.SetStateAction<IGood[]>>;
    careGoodTypes: string[];
    careGoodsTypes: { [key: string]: string[] }
    setCareGoodsTypes: React.Dispatch<React.SetStateAction<{
        [key: string]: string[];
    }>>
}

const GoodEditor: FC<GoodEditorProps> =
    ({ className, good, goods, setGoods, careGoodTypes, careGoodsTypes, setCareGoodsTypes }) => {
        const [goodState, setGoodState] = useState<IGood>(good);
        const [careTypes, setCareTypes] = useState<string[]>(careGoodTypes);

        const handleTextInputOnChange = (event: ChangeEvent<HTMLInputElement>, prop: GoodProperty): void => {
            setGoodState({ ...goodState, [prop]: event.target.value })
        }

        const handleSelectOnChange = (event: ChangeEvent<HTMLSelectElement>, prop: GoodProperty): void => {
            setGoodState({ ...goodState, [prop]: event.target.value })
        }

        const handleDescriptionOnChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
            setGoodState({ ...goodState, description: event.target.value })
        }

        const handleSaveOnClick = (): void => {
            updateGood(
                [...goods.filter(goodItem => goodItem.barcode !== good.barcode), goodState]
                    .sort((a, b) => +a.barcode - +b.barcode)
            );

            if (good.barcode === goodState.barcode) {
                updateCareGoodType(
                    { ...careGoodsTypes, [good.barcode]: careTypes }
                );
            }
            else {
                delete careGoodsTypes[good.barcode];

                updateCareGoodType(
                    { ...careGoodsTypes, [goodState.barcode]: careTypes }
                );
            }
        }

        const handleCancelOnClick = (): void => {
            setGoodState(good)
            setCareTypes(careGoodTypes);
        }

        const handleDeleteOnClick = (): void => {
            updateGood(goods.filter(goodItem => goodItem.barcode !== good.barcode));
        }

        const updateGood = (goods: IGood[]): void => {
            localStorage.setItem("goods", JSON.stringify(goods));
            setGoods(goods);
        }

        const updateCareGoodType = (newCareGoodsTypes: { [key: string]: string[] }): void => {
            localStorage.setItem("careGoodsTypes", JSON.stringify(newCareGoodsTypes));
            setCareGoodsTypes(newCareGoodsTypes)
        }

        return (
            <ul className={"GoodEditor " + className}>
                <li>
                    <span>Название:</span>
                    <TextInput
                        value={goodState.name}
                        onChange={(e) => handleTextInputOnChange(e, "name")}
                    />
                </li>
                <li>
                    <span>Бренд:</span>
                    <TextInput
                        value={goodState.brand}
                        onChange={(e) => handleTextInputOnChange(e, "brand")}
                    />
                </li>

                <li>
                    <span>Производитель:</span>
                    <TextInput
                        value={goodState.manufacturer}
                        onChange={(e) => handleTextInputOnChange(e, "manufacturer")}
                    />
                </li>
                <li>
                    <span>Цена:</span>
                    <TextInput
                        value={goodState.price}
                        onChange={(e) => handleTextInputOnChange(e, "price")}
                    />
                </li>
                <li>
                    <span>Штрихкод:</span>
                    <TextInput
                        value={goodState.barcode}
                        onChange={(e) => handleTextInputOnChange(e, "barcode")}
                    />
                </li>
                <li>
                    <span>Размер:</span>
                    <TextInput
                        value={goodState.size}
                        onChange={(e) => handleTextInputOnChange(e, "size")}
                    />
                </li>
                <li>
                    <span>URL картинки:</span>
                    <TextInput
                        value={goodState.image_url}
                        onChange={(e) => handleTextInputOnChange(e, "image_url")}
                    />
                </li>
                <li>
                    <span>Тип размера:</span>
                    <Select
                        value={goodState.size_type}
                        options={["вес", "объем"]}
                        onChange={(e) => handleSelectOnChange(e, "size_type")}
                    />
                </li>
                <li className="GoodEditor__CareType">
                    <span>Тип ухода:</span>
                    <MultiSelect
                        options={Object.values(cosmeticsAndHygiene)}
                        selectedOptions={careTypes}
                        setSelectedOptions={setCareTypes}
                    />
                </li>
                <li className="GoodEditor__Description">
                    <span>Описание:</span>
                    <TextArea
                        value={goodState.description}
                        onChange={handleDescriptionOnChange}
                    />
                </li>
                <li>
                    <Button text={"Сохранить"} onClick={handleSaveOnClick} />
                    <Button text={"Отменить"} onClick={handleCancelOnClick} />
                    <Button text={"Удалить"} onClick={handleDeleteOnClick} />
                </li>
            </ul>
        );
    }

export default GoodEditor;