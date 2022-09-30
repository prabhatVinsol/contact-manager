import React from 'react';
import Contact from './Contact';

function contactList({ contacts, removeContact }) {
  return (
    <>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </>
  );
}

export default contactList;
