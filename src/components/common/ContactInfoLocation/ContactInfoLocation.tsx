import { FC } from 'react';
import { Link } from 'react-router-dom';

import "./ContactInfoLocation.scss";

interface ContactInfoLocationProps {

}

const ContactInfoLocation: FC<ContactInfoLocationProps> = () => {
    return (
        <ul className="ContactInfoLocation">
            <li><Link to={""}>г. Кокчетав, ул. Ж. Ташенова 129Б</Link></li>
            <li>(Рынок Восточный)</li>
        </ul>
    );
}

export default ContactInfoLocation;