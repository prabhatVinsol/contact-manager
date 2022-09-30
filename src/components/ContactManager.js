import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Search from './Search';
import ContactList from './contactList';

function ContactManager() {
  const [contactList, updateContactList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const handleSearchInput = (value) => {
    setSearchText(value);
  };
  const removeContact = (contact) => {
    updateContactList(contactList.filter((contactVal) => contactVal.id !== contact.id));
  };
  const addContact = (contact) => {
    updateContactList([...contactList, contact]);
  };
  const getContactListToRender = () => {
    if (searchText === '') {
      return contactList;
    }
    return contactList.filter((contact) => (contact.firstName.includes(searchText)
    || (contact.lastName.includes(searchText)) || (
      contact.mailTo.includes(searchText))));
  };
  return (
    <div>
      <div>
        <Search value={searchText} handleSearchInput={handleSearchInput} />
      </div>
      <div>
        <ContactForm addContact={addContact} />
      </div>
      <div className="ContactList">
        <ContactList contacts={getContactListToRender()} removeContact={removeContact} />
      </div>
    </div>
  );
}

export default ContactManager;
