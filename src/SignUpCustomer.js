import SignupFormCustomer from "./SignupFormCustomer";
import SignupSuccessCustomer from "./SignupSuccessCustomer";
import { useState } from "react";
import "./taimoor.css";
// import Background from "./css/background.png";

const SignUpCustomer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="image">
      <div className="content">
        {!isSubmitted ? (
          <SignupFormCustomer submitForm={submitForm} />
        ) : (
          <SignupSuccessCustomer />
        )}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default SignUpCustomer;
