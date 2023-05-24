import AuthNav from 'components/authNav/AuthNav';
import css from './AppBar.module.css';
import Navigation from 'components/navigation';
import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
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
