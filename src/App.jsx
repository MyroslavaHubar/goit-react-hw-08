import { lazy, Suspense, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiRefresh } from "./redux/auth/operations";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import RestrictedRout from "./components/UserMenu/RestrictedRout";
import PrivateRout from "./components/UserMenu/PrivateRoute";
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(apiRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Layout>
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={<RestrictedRout component={<RegistrationPage />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRout component={<LoginPage />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRout component={<ContactsPage />} />}
              />
            </Routes>
          </Suspense>
        </main>
      </Layout>
    </>
  );
}

export default App;
