/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import FormInputComp from './FormInputComp';
import '../stylesheet/ContactManager.css';

function ContactForm(props) {
  const { addContact } = props;
  const firstNameField = 'First Name';
  const lastNameField = 'Last Name';
  const emailField = 'Email';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [isFirstNameEmpty, setFirstNameError] = useState(false);
  const [isLastNameEmpty, setLastNameError] = useState(false);
  const [isEmailEmpty, setEmailError] = useState(false);

  const handleInputChange = (fieldName, value) => {
    if (fieldName === firstNameField) {
      setFirstName(value);
    } else if (fieldName === lastNameField) {
      setLastName(value);
    } else if (fieldName === emailField) {
      setEmail(value);
    }
  };
  const updateContactList = () => {
    const uniqueId = uuid();
    const contact = {
      firstName,
      lastName,
      email,
      id: uniqueId.slice(0, 8),
    };
    addContact(contact);
    setFirstName('');
    setLastName('');
    setEmail('');
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let error = false;
    if (firstName === '') {
      error = true;
      setFirstNameError(true);
    }
    if (lastName === '') {
      error = true;
      setLastNameError(true);
    }
    if (email === '') {
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
          value={firstName}
          handleChange={handleInputChange}
          isEmptyError={isFirstNameEmpty}
        />
        <FormInputComp
          field={lastNameField}
          value={lastName}
          handleChange={handleInputChange}
          isEmptyError={isLastNameEmpty}
        />
        <FormInputComp
          field={emailField}
          value={email}
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
