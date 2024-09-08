import { useEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        {loading && <Loader />}
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
