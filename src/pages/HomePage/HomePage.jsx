import css from "./HomePage.module.css";
import Section from "../../components/Section/Section";

function HomePage() {
  return (
    <Section>
      <h1 className={css.homePageTitle}>
        Не забыть написать здесь про приложение
      </h1>
    </Section>
  );
}

export default HomePage;
