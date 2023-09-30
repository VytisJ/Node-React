import { Formik, Form, Field, ErrorMessage } from "formik";

const checkPassword = (str) => {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(str);
};

const checkEmail = (str) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(str);
};

const App = () => {
  return (
    <>
      <div className="forma">
        <div className="appPic"></div>
        <div className="loginForm">
          <h1>Get started</h1>
          <div>Already have an account?</div>
          <div className="pinkText">Log in</div>
          <button className="gmail" type="submit"></button>
          <button className="facebook" type="submit"></button>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={async (values, formikHelpers) => {
              alert("Successfully submitted form");
              formikHelpers.resetForm();
            }}
            validate={(values) => {
              const errors = {};

              if (!values.name) {
                errors.name = "Name is required";
              } else if (values.name.length < 3) {
                errors.name = "Name is too short. Minimum 3 chars";
              }

              if (!values.email) {
                errors.email = "Email is required";
              } else if (!checkEmail(values.email)) {
                errors.email = "Invalid email address";
              }

              if (!values.password) {
                errors.password = "Password is required";
              } else if (!checkPassword(values.password)) {
                errors.password =
                  "Password should contain upper, lower cased letters, number, symbol and minimum 8 chars";
              }

              if (values.age < 18) {
                errors.age = "Age should be more or equal than 18";
              }

              return errors;
            }}
          >
            <Form>
              <h3>Or</h3>
              <h4 className="testas">Name</h4>
              <Field
                className="pasField"
                name="name"
                placeholder="Joy Shahed"
                type="text"
              />
              <ErrorMessage name="name" component="div" />
              <br />
              <br></br>
              <h4>Email</h4>
              <Field
                className="pasField"
                name="email"
                placeholder="abc@gmail.com"
                type="email"
              />
              <ErrorMessage name="email" component="div" />
              <br />
              <br></br>
              <h4>Password</h4>
              <Field
                className="pasField"
                name="password"
                placeholder="********"
                type="password"
              />
              <ErrorMessage name="password" component="div" />
              <br />
              <br></br>
              <button className="submitButton" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default App;
