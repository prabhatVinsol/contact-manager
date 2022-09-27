/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import FormInputComp from './FormInputComp';
import '../stylesheet/ContactManager.css';
import isEmailValid from '../utilities/Helper';

function ContactForm({ addContact }) {
  const firstNameField = 'First Name';
  const lastNameField = 'Last Name';
  const emailField = 'Email';

  const getFormValue = (firstName = '', lastName = '', mailTo = '') => ({
    firstName,
    lastName,
    mailTo,
  });

  const [formValue, setFormValue] = useState(getFormValue());
  const [isFirstNameEmpty, setFirstNameError] = useState(false);
  const [isLastNameEmpty, setLastNameError] = useState(false);
  const [isEmailEmpty, setEmailError] = useState(false);

  const handleInputChange = (fieldName, value) => {
    if (fieldName === firstNameField) {
      setFormValue({
        ...formValue,
        firstName: value,
      });
    } else if (fieldName === lastNameField) {
      setFormValue({
        ...formValue,
        lastName: value,
      });
    } else if (fieldName === emailField) {
      setFormValue({
        ...formValue,
        mailTo: value,
      });
    }
  };
  const updateContactList = () => {
    const uniqueId = uuid();
    const contact = {
      ...formValue,
      id: uniqueId.slice(0, 8),
    };
    addContact(contact);
    setFormValue(getFormValue());
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let error = false;
    if (formValue.firstName === '') {
      error = true;
      setFirstNameError(true);
    }
    if (formValue.lastName === '') {
      error = true;
      setLastNameError(true);
    }
    if (formValue.mailTo === '') {
      error = true;
      setEmailError(true);
    } else if (!isEmailValid(formValue.mailTo)) {
      error = true;
      setEmailError(true);
    }
    if (error) return;
    updateContactList();
  };

  return (
    <div className="FormContainer">
      <form onSubmit={handleOnSubmit}>
        <FormInputComp
          field={firstNameField}
          value={formValue.firstName}
          handleChange={handleInputChange}
          isEmptyError={isFirstNameEmpty}
        />
        <FormInputComp
          field={lastNameField}
          value={formValue.lastName}
          handleChange={handleInputChange}
          isEmptyError={isLastNameEmpty}
        />
        <FormInputComp
          field={emailField}
          value={formValue.mailTo}
          handleChange={handleInputChange}
          isEmptyError={isEmailEmpty}
        />
        <input
          type="submit"
          className="SubmitButton"
          value="Create Contact"
        />
      </form>
    </div>
  );
}

export default ContactForm;
