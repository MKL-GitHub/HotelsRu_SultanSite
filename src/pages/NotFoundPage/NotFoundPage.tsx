import {FC} from 'react';

import "./NotFoundPage.scss";

interface NotFoundPageProps {
    
}
 
const NotFoundPage: FC<NotFoundPageProps> = () => {
    return ( 
        <div className="NotFoundPage">
            <section>
                Страница не найдена!
            </section>
        </div>
     );
}
 
export default NotFoundPage;