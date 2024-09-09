import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    email: "",
    password: "",
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .min(5, "Must be at least 2 characters")
      .max(50, "Must be less than 50 characters")
      .matches(emailRegex, "Please enter a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be at least 8 characters")
      .matches(
        passwordRegex,
        "Password should contain atleast one number and one special character"
      ),
  });

  function handleSubmit(values) {
    dispatch(apiLogin(values));
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.loginForm}>
        <label
          htmlFor="email"
          placeholder="Please, enter your email"
          className={css.loginFormTitle}
        >
          Email
        </label>
        <Field
          type="text"
          name="email"
          id="email"
          className={css.loginFormInput}
        />
        <ErrorMessage
          name="email"
          component="label"
          className={css.loginFormError}
        />
        <label
          htmlFor="password"
          placeholder="Please, enter your password"
          className={css.loginFormTitle}
        >
          Password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.loginFormInput}
        />
        <ErrorMessage
          name="password"
          component="label"
          className={css.loginFormError}
        />

        <button type="submit" aria-label="Sign Up" className={css.buttonLogIn}>
          Log In
        </button>
        {error && <p>Oops, some error occured... {error}</p>}
      </Form>
    </Formik>
  );
}

export default LoginForm;
