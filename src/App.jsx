import { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contactsOps";
// import { selectLoading } from "./redux/contactsSlice";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
