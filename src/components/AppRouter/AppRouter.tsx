import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes/routes';

interface AppRouterProps {

}

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Routes>
            {routes.map((route, index) =>
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    Component={route.Component}
                />
            )}
        </Routes>
    );
}

export default AppRouter;