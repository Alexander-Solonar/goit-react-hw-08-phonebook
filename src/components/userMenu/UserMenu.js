import css from './UserMenu.module.css';
import userIcon from '../../image/user.svg';

const UserMenu = () => {
  return (
    <div className={css.box}>
      <img className={css.icon} src={userIcon} alt="user-avatar" />
      <p className={css.userEmail}>mango@mail.com</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
