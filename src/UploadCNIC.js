import UploadCNICForm from "./UploadCNICForm";
// import SignupSuccessCustomer from "./SignupSuccessCustomer";

import { useState } from "react";

const UploadCNIC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="image">
      <div className="cnic-content">
        {!isSubmitted ? <UploadCNICForm submitForm={submitForm} /> : ""}
        {/* <SignupSuccess /> */}
      </div>
    </div>
  );
};

export default UploadCNIC;
