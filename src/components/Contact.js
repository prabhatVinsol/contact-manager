import React from 'react';
import userImage from '../imageResources/User.png';

function Contact(props) {
  const { contact, removeContact } = props;
  const handleImageLoadFail = (e) => {
    e.target.onError = null;
    e.target.src = userImage;
  };
  return (
    <div className="Contact">
      <img src={userImage} className="ContactImage" alt="logo" onError={handleImageLoadFail} />
      <div className="ContactName">
        {contact.firstName}
        {' '}
        {contact.lastName}
      </div>
      <div className="ContactName">
        {contact.mailTo}
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
