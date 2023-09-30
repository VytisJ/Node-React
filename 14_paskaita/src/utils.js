export const capitalize = (string) => {
  if (!string || Array.isArray(string)) return "";
  if (typeof string !== "string") return string;

  return string[0].toUpperCase() + string.slice(1, string.length);
};

export const upperCase = (string) => {
  // parasyti testa
  return string.toUpperCase();
};

export const addNumbers = (num1, num2) => {
  // parasyti testa
  return num1 + num2;
};

export const addMultipleNumbers = (numbers) => {
  // numbers pvz [1, 2, 3] => 6
  // uzbaigti funkcija ir parasyti testa
};
