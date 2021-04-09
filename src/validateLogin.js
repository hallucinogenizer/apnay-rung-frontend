export default function validateLogin(values) {
  const dummy = {
    email: "vafabatool@live.com",
    password: "vafa123"
  };

  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
    //shows errors if .com or incorrect email not added
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (values.email !== dummy.email) {
    errors.email = "incorrect password or email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (values.password !== dummy.password) {
    errors.password = "incorrect password or email";
  }

  return errors;
}
