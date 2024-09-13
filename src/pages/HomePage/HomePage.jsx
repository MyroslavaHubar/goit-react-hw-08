import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.homePage}>
      <h1 className={css.homeTitle}>Welcome to our contacts book!</h1>
      <p className={css.homeText}>
        Now managing your contacts is easier and more convenient. Save and
        organize your phone book. Everything your contacts in one place, always
        at your fingertips!
      </p>
    </div>
  );
}

export default HomePage;
