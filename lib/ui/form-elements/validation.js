export default function validate(value, constraints) {
  if (
    constraints.required &&
    (value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === ""))
  ) {
    return {
      valid: false,
      message: "This field is required",
    };
  }
  if (constraints.min_length && value.length < constraints.min_length) {
    return {
      valid: false,
      message: `This field must be at least ${constraints.min_length} characters long`,
    };
  }
  if (constraints.max_length && value.length > constraints.max_length) {
    return {
      valid: false,
      message: `This field must be no more than ${constraints.max_length} characters long`,
    };
  }
  if (constraints.pattern && !constraints.pattern.test(value)) {
    return {
      valid: false,
      message: constraints.pattern_message || "This field is invalid",
    };
  }
  return {
    valid: true,
    message: null,
  };
}
