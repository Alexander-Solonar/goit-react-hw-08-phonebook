import { useSelector } from 'react-redux';
import AuthNav from 'components/authNav/AuthNav';
import Navigation from 'components/navigation';
import UserMenu from 'components/userMenu/UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default AppBar;
