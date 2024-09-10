import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <div>{children}</div>
      <footer className={css.footer}>
        <p>Author: Myroslava Hubar.</p>
      </footer>
    </>
  );
}

export default Layout;
