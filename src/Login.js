import LoginForm from "./LoginForm";
import LoginSuccess from "./LoginSuccess";
import { useState } from "react";
// import Background from "./css/background.png";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="background-image">
      <div className="form-container">
        {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <LoginForm />}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default Login;
