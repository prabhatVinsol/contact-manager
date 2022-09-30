export const isEmailValid = (email) => {
  const regex = (/^(([^<>()[\].,;:\s@]+(\.[^<>()[\].,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regex.test(email);
};

export const checkForEmptyError = (inputText) => ((inputText === '') ? ['Must be present'] : []);

export const checkEmptyValidEmailError = (inputText) => {
  if (inputText === '') {
    return ['Must be present'];
  } if (!isEmailValid(inputText)) {
    return ['Input is invalid'];
  }
  return [];
};
