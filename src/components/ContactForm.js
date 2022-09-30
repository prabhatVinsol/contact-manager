/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import FormInputComp from './FormInputComp';
import '../stylesheet/ContactManager.css';
import { checkEmptyValidEmailError, checkForEmptyError } from '../utilities/Helper';

function ContactForm({ addContact }) {
  const firstNameField = 'First Name';
  const lastNameField = 'Last Name';
  const emailField = 'Email';

  const getFormValue = (firstName = '', lastName = '', mailTo = '') => ({
    firstName,
    lastName,
    mailTo,
  });

  const getFormError = () => ({
    firstName: [],
    lastName: [],
    mailTo: [],
  });

  const [formValue, setFormValue] = useState(getFormValue());
  const [formError, setformError] = useState(getFormError());
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
    setformError(getFormError());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setformError({
      firstName: checkForEmptyError(formValue.firstName),
      lastName: checkForEmptyError(formValue.lastName),
      mailTo: checkEmptyValidEmailError(formValue.mailTo),
    });
  };

  useEffect(() => {
    if ((Number(formError.firstName.length) === 0)
    && (Number(formError.lastName.length) === 0)
    && (Number(formError.mailTo) === 0) && (formValue.firstName !== '')) {
      updateContactList();
    }
  }, [formError]);

  return (
    <div className="FormContainer">
      <form onSubmit={handleOnSubmit}>
        <FormInputComp
          field={firstNameField}
          value={formValue.firstName}
          handleChange={handleInputChange}
          isEmptyError={formError.firstName.length > 0}
        />
        <FormInputComp
          field={lastNameField}
          value={formValue.lastName}
          handleChange={handleInputChange}
          isEmptyError={formError.lastName.length > 0}
        />
        <FormInputComp
          field={emailField}
          value={formValue.mailTo}
          handleChange={handleInputChange}
          isEmptyError={formError.mailTo.length > 0}
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
