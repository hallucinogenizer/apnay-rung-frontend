export default function validateInfoSeller(values) {
  let errors = {};

  if (!values.userName.trim()) {
    errors.userName = "Your name is required";
  }

  if (!values.email) {
    errors.email = "Email required";
    //shows errors if .com or incorrect email not added
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  if (!values.address) {
    errors.address = "Address required";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Phone number required";
  } else if (values.phonenumber.length < 10) {
    errors.password = "Phone number needs 10 digits";
  }

  return errors;
}
