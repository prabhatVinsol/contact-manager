import React from 'react';
import user from '../imageResources/User.png';

function Contact(props) {
  const { contact, removeContact } = props;
  return (
    <div className="Contact">
      <img src={user} className="ContactImage" alt="logo" />
      <div className="ContactName">
        {contact.firstName}
        {' '}
        {contact.lastName}
      </div>
      <div className="ContactName">
        {contact.email}
      </div>
      <button
        type="button"
        className="Remove ContactName"
        onClick={() => removeContact(contact)}
      >
        REMOVE
      </button>
    </div>
  );
}

export default Contact;
