import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <div>
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onClick={onClick}
            />
          );
        })}
      </ContactsList>
    </div>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
