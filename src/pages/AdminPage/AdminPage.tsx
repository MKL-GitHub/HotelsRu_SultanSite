import { FC, useState, useEffect } from 'react';

import "./AdminPage.scss";
import GoodEditor from '../../components/GoodEditor/GoodEditor';
import IGood from '../../interfaces/IGood';
import Button from '../../components/UI/Button/Button';
import compareObjects from '../../services/compareObjects';

interface AdminPageProps {

}

const AdminPage: FC<AdminPageProps> = () => {
    const goodsData: string | null = localStorage.getItem("goods");
    const careGoodsTypesData: string | null = localStorage.getItem("careGoodsTypes");

    const [goods, setGoods] = useState<IGood[]>([]);
    const [careGoodsTypes, setCareGoodsTypes] = useState<{ [key: string]: string[] }>({});
    const [newGoodForm, setNewGoodForm] = useState<IGood | null>();


    useEffect(() => {
        if (goodsData) {
            setGoods(JSON.parse(goodsData));
        }
    }, [goodsData]);

    useEffect(() => {
        if (careGoodsTypesData) {
            setCareGoodsTypes(JSON.parse(careGoodsTypesData));
        }
    }, [careGoodsTypesData]);

    useEffect(() => {
        if (newGoodForm) {
            if (!goods.some(good => compareObjects(good, newGoodForm))) {
                setNewGoodForm(null);
            }
        }

    }, [goods]);

    const handleAddGood = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setNewGoodForm({
            barcode: "",
            brand: "",
            description: "",
            image_url: "",
            manufacturer: "",
            name: "",
            price: "",
            size: "",
            size_type: ""
        })
    }

    return (
        <section className="AdminPage">
            <div className="AdminPage__Title">Администрирование данных</div>
            <Button
                text={"Добавить товар"}
                className="AdminPage__AddGood"
                onClick={handleAddGood}
            />
            {newGoodForm &&
                <GoodEditor
                    good={newGoodForm}
                    goods={goods}
                    setGoods={setGoods}
                    careGoodTypes={[]}
                    careGoodsTypes={careGoodsTypes}
                    setCareGoodsTypes={setCareGoodsTypes}
                    className="AdminPage__NewGood"
                />}
            <ul className="AdminPage__GoodsList">

                {goods.map((good, index) =>
                    <li key={index}><GoodEditor
                        good={good}
                        goods={goods}
                        setGoods={setGoods}
                        careGoodTypes={careGoodsTypes[good.barcode]}
                        careGoodsTypes={careGoodsTypes}
                        setCareGoodsTypes={setCareGoodsTypes}
                    /></li>
                )}
            </ul>

        </section>
    );
}

export default AdminPage;