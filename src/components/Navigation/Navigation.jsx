import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildClassLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={buildClassLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildClassLink}>
          {" "}
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
