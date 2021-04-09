export default function validateCNIC(values) {
  let errors = {};

  if (!values.file) {
    errors.file = "image is required";
  }
  if (!values.question1) {
    errors.question1 = "select question";
  } else if (values.question1 === "Choose a security question") {
    errors.question1 = "select question";
  }
  if (!values.question2) {
    errors.question2 = "select question";
  } else if (values.question2 === "Choose a security question") {
    errors.question2 = "select question";
  } else if (values.question2 === values.question1) {
    errors.question2 = "questions must be different";
  }
  if (!values.answer1) {
    errors.answer1 = "answer required";
  }
  if (!values.answer2) {
    errors.answer2 = "answer required";
  }
  return errors;
}
