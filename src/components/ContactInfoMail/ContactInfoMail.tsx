import { FC } from 'react';
import { Link } from 'react-router-dom';

import "./ContactInfoMail.scss";

interface ContactInfoMailProps {
    className?: string;
}

const ContactInfoMail: FC<ContactInfoMailProps> = ({ className }) => {
    return (
        <ul className={"ContactInfoMail " + className}>
            <li><Link to={""}>opt.sultan@mail.ru</Link></li>
            <li>На связи в любое время</li>
        </ul>
    );
}

export default ContactInfoMail;