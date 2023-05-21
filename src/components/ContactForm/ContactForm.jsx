import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledForm,
  StyledField,
  FieldWrapper,
  Label,
  ErrorText,
  AddButton,
} from './ContactForm.styled';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[\p{L} '-]+$/u,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: yup
    .string()
    .required('Number is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.'
    ),
});

export const ContactForm = ({ onSubmit, contacts }) => {
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: ({ name, number }) => handleSubmit(name, number),
    validationSchema,
  });

  const handleSubmit = (name, number) => {
    formik.resetForm();
    if (contacts.some(contact => contact.name.includes(name))) {
      Report.warning(`${name} is already in contacts`, '', 'OK', {
        backOverlayClickToClose: true,
        backOverlayColor: 'rgba(199,87,21,0.2)',
        buttonBackground: '#C75715',
        svgColor: '#C75715',
      });
      return;
    }
    Notify.success(`Contact ${name} added to contacts`);
    onSubmit(name, number);
  };

  const nameInputId = uniqid();
  const numberInputId = uniqid();
  return (
    <div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FieldWrapper>
          <StyledField
            type="text"
            name="name"
            id={nameInputId}
            required
            placeholder="."
            className="styled-input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Label htmlFor={nameInputId}>Name</Label>
          {formik.touched.name && formik.errors.name && (
            <ErrorText>{formik.errors.name}</ErrorText>
          )}
        </FieldWrapper>
        <FieldWrapper>
          <StyledField
            type="tel"
            name="number"
            id={numberInputId}
            required
            placeholder="."
            className="styled-input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.number}
          />
          <Label htmlFor={numberInputId}>Number</Label>
          {formik.touched.number && formik.errors.number && (
            <ErrorText>{formik.errors.number}</ErrorText>
          )}
        </FieldWrapper>
        <AddButton type="submit">Add contact</AddButton>
      </StyledForm>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
