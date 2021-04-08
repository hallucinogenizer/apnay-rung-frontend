export default function validateSecurity(values) {
  let errors = {};

  if (!values.question1) {
    errors.question1 = "select question";
  } else if (values.question1 === "Choose a security question") {
    errors.question1 = "select question";
  }
  if (!values.question2) {
    errors.question2 = "select question";
  } else if (values.question2 === "Choose a security question") {
    errors.question2 = "select question";
  }

  if (!values.answer1) {
    errors.answer1 = "answer required";
    //shows errors if .com or incorrect email not added
  }

  if (!values.answer2) {
    errors.answer2 = "answer required";
  }

  return errors;
}
