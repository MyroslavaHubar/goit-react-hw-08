import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { apiLogOut } from "../../redux/auth/operations";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div>
      <div>
        <p className={css.homePageTitle}>Welcome, {user.name}</p>
        <p className={css.homePageTitle}>Your email: {user.email}</p>
      </div>
      <button type="button" onClick={() => dispatch(apiLogOut())}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
