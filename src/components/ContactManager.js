import React, { useState } from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';

function ContactManager() {
  const [contactList, updateContactList] = useState([]);
  const removeContact = (contact) => {
    updateContactList(contactList.filter((contactVal) => contactVal.id !== contact.id));
  };
  const addContact = (contact) => {
    console.log('Conatct', contact);
    updateContactList([...contactList, contact]);
  };
  return (
    <div>
      <div>
        <ContactForm addContact={addContact} />
      </div>
      <div className="ContactList">
        {contactList.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            removeContact={removeContact}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactManager;
