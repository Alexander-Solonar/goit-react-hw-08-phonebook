import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import userIcon from '../../image/user.svg';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <div className={css.box}>
      <img className={css.icon} src={userIcon} alt="user-avatar" />
      <p className={css.userName}>{userName}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
