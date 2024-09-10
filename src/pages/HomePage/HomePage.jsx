import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.homePage}>
      <h1 className={css.homeTitle}>Welcome to our app!</h1>
      <p className={css.homeText}>
        Now managing your contacts and planning tasks is easier and more
        convenient. Save and organize your phone book, create tasks, and manage
        your time with the built-in planner. Everything you need in one place,
        always at your fingertips!
      </p>
    </div>
  );
}

export default HomePage;
