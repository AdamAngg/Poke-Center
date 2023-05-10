export const containsSpecialChars = (string) => {
  if (string !== "") {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    return regex.test(string);
  } else {
    return false;
  }
};
