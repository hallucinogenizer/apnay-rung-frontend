import SignupFormSeller from "./SignupFormSeller";
import SignupSuccessSeller from "./SignupSuccessSeller";
import { useState } from "react";
// import Background from "./css/background.png";

const SignUpSeller = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="background-image">
      <div className="form-container">
        {!isSubmitted ? (
          <SignupFormSeller submitForm={submitForm} />
        ) : (
          <SignupSuccessSeller />
        )}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default SignUpSeller;
