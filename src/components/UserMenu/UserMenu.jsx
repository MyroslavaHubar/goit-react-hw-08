import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { apiLogOut } from "../../redux/auth/operations";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.userMenuContainer}>
      <div className={css.userMenuContext}>
        <p>Welcome, {user.name}!</p>
        <p>Your email: {user.email}</p>
      </div>
      <button
        type="button"
        className={css.userMenuBtn}
        onClick={() => dispatch(apiLogOut())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
