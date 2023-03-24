import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';

import "./App.scss";

interface AppProps {

}

const App: FC<AppProps> = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
