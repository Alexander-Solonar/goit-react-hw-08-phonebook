import AuthNav from 'components/authNav/AuthNav';
import css from './AppBar.module.css';
import Navigation from 'components/navigation';
import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
const AppBar = () => {
  const isLoggenIn = useSelector(state => state.auth.isLoggenIn);

  return (
    <header className={css.header}>
      <Navigation />
      {!isLoggenIn && <AuthNav />}
      {isLoggenIn && <UserMenu />}
    </header>
  );
};

export default AppBar;
