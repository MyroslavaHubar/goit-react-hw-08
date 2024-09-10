import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.allNavigation}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Navigation;
