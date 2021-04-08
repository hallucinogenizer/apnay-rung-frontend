import SecurityForm from "./SecurityForm";
import SignupSuccessCustomer from "./SignupSuccessCustomer";

import { useState } from "react";

const SecurityQuestions = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="background-image">
      <div className="form-container">
        {!isSubmitted ? (
          <SecurityForm submitForm={submitForm} />
        ) : (
          <SignupSuccessCustomer />
        )}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default SecurityQuestions;
