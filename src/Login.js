import LoginForm from "./LoginForm";
import LoginSuccess from "./LoginSuccess";
import { useState } from "react";
// import Background from "./css/background.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="image">
      <div className="content-logout">
        {!isSubmitted ? <LoginForm submitForm={submitForm} /> : ""}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default Login;
