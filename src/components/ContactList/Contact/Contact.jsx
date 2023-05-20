import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactText,
  ContactName,
  ContactNumber,
  CallButton,
  ContactIcon,
  DeleteButton,
} from './Contact.styled';
import sprite from '../../../img/sprite.svg';

const callIcon = `${sprite}#icon-phone`;
const deleteIcon = `${sprite}#icon-delete`;

export const Contact = ({ id, name, number, onClick }) => {
  const normalizedNumberLink = `tel:${number.replace(/[^\d+]/g, '')}`;
  return (
    <ContactItem>
      <ContactText>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactText>
      <CallButton href={normalizedNumberLink} title="Call Contact">
        <ContactIcon width="24" height="24">
          <use href={callIcon}></use>
        </ContactIcon>
      </CallButton>
      <DeleteButton
        type="button"
        onClick={() => onClick(id)}
        title="Delete Contact"
      >
        <ContactIcon width="24" height="24">
          <use href={deleteIcon}></use>
        </ContactIcon>
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
