import { FC } from 'react';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';

import "./HomePage.scss";

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = () => {
    return (
        <div className="HomePage">
            <Header />
            <section className="HomePage__Main">
                Главная
            </section>
            <Footer />
        </div>
    );
}

export default HomePage;