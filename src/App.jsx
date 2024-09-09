import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiRefresh } from "./redux/auth/operations";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefresh);
  }, [dispatch]);

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
