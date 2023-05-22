import { NavLink } from 'react-router-dom';
import css from './Navigatio.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
