import css from './UserMenu.module.css';
import userIcon from '../../image/user.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <img className={css.icon} src={userIcon} alt="user-avatar" />
      <p className={css.userEmail}>{userEmail}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
