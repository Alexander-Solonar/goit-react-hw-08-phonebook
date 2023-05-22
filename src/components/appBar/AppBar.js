import AuthNav from 'components/authNav/AuthNav';
import css from './AppBar.module.css';
import Navigation from 'components/navigation';
import UserMenu from 'components/userMenu/UserMenu';
const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;
