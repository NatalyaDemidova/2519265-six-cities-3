import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/notFound';
import PrivateRoute from '../privet-rout/privet-rout';
import Layout from '../layout';
import LayoutTools from '../layout-tools';
import { useState } from 'react';

type AppScreenProps = {
  placesCount: number;
  cardsCount: number;
};

// type Authorization = {
//   isAuth: boolean;
// };

export default function App({
  placesCount,
  cardsCount,
}: AppScreenProps): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isAuth={isAuth} />}>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage placesCount={placesCount} cardsCount={cardsCount} />
            }
          >
          </Route>
          {/* 2 */}
          <Route path={AppRoute.Favorites} element={<LayoutTools />}>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <Favorites></Favorites>
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          {/* 3 */}
          <Route
            path={AppRoute.Offer}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                {<Offer />}
              </PrivateRoute>
            }
          >
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>

        <Route path={AppRoute.Login} element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
