import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Wrapper, MainTitle, SecondaryTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInput = ({ currentTarget: { value } }) => setFilter(value);

  const addContact = (name, number) => {
    setContacts(prev => [...prev, { id: `${uniqid()}`, name, number }]);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prev => [...prev.filter(contact => contact.id !== id)]);
  };

  const filteredContacts = filterContacts();

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={addContact} contacts={contacts} />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter filter={filter} onChange={handleInput} />
      <ContactList contacts={filteredContacts} onClick={deleteContact} />
    </Wrapper>
  );
};
