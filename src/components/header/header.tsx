import Logo from '../logo';
import HeaderNav from './header-nav';

type Authorization = {
  isAuth: boolean;
}

export default function Header({isAuth}: Authorization): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav isAuth={isAuth}/>
        </div>
      </div>
    </header>
  );
}
