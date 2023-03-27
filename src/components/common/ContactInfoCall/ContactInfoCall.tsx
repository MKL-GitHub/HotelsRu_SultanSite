import { FC } from 'react';
import { Link } from 'react-router-dom';

import "./ContactInfoCall.scss";

interface ContactInfoCallProps {
    className?: string;
}

const ContactInfoCall: FC<ContactInfoCallProps> = ({ className }) => {
    return (
        <div className={"ContactInfoCall " + className}>
            <span>+7 (777) 490-00-91</span>
            <span>время работы: 9:00-20:00</span>
            <Link to="">Заказать звонок</Link>
        </div>
    );
}

export default ContactInfoCall;