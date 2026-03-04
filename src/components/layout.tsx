import { Outlet, useLocation } from 'react-router-dom';
import { THEME_MAP } from '../const';
import Header from './header/header';

type AppPath = '/login' | '/favorites' | '/offer' | '/';

type Authorization = {
  isAuth: boolean;
}

export default function Layout({isAuth}: Authorization): JSX.Element {
  const { pathname } = useLocation();

  const getLayoutClass = (path: string): string =>
    THEME_MAP[path as AppPath] ?? '';

  const dynamicClass = getLayoutClass(pathname);
  return (
    <div className={`page ${dynamicClass}`}>
      <Header isAuth={isAuth}/>
      <main className="page__main page__main--index">
        <Outlet />
      </main>
    </div>
  );
}
