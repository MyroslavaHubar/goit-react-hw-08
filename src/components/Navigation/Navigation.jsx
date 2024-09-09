import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  return (
    <header className={css.header}>
      <nav className={css.headerNavigation}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
            <div>
              <p className={css.homePageTitle}>Welcome, {user.name}</p>
              <p className={css.homePageTitle}>Your email: {user.email}</p>
            </div>
          </>
        )}
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
