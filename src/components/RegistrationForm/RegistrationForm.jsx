import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Must be at least 2 characters")
      .max(50, "Must be less than 50 characters"),
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
    dispatch(apiRegister(values));
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      <Form className={css.registerForm}>
        <label htmlFor="name" className={css.registerFormTitle}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id="name"
          placeholder="Please, enter your name"
          className={css.registerFormInput}
        />
        <ErrorMessage
          name="name"
          component="label"
          className={css.registerFormError}
        />

        <label htmlFor="email" className={css.registerFormTitle}>
          Email
        </label>
        <Field
          type="text"
          name="email"
          id="email"
          placeholder="Please, enter your email"
          className={css.registerFormInput}
        />
        <ErrorMessage
          name="email"
          component="label"
          className={css.registerFormError}
        />
        <label htmlFor="password" className={css.registerFormTitle}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          placeholder="Please, enter your password"
          className={css.registerFormInput}
        />
        <ErrorMessage
          name="password"
          component="label"
          className={css.registerFormError}
        />

        <button type="submit" aria-label="Sign Up" className={css.buttonSignUp}>
          Sign Up
        </button>
        {error && <p>Oops, some error occured... {error}</p>}
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
