import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledField = styled(Field)`
  box-sizing: border-box;
  width: 302px;
  height: 54px;
  padding: 16px;
  border: 1px solid #6998aa;
  border-radius: 8px;
  font-family: inherit;
  font-size: 16px;
  line-height: 140%;
  color: #1f1f1f;
  transition: all 150ms ease;

  &:focus-visible {
    border: 1px solid #051839;
    outline: 2px solid #6998aa;
  }

  &::placeholder {
    color: transparent;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const ErrorText = styled.p`
  position: absolute;
  padding: 4px;
  width: 284px;
  top: 44px;
  left: 4px;
  font-size: 12px;
  line-height: 140%;
  color: #dc6000;
  background-color: #fff;
  border-radius: 8px;
  z-index: 2;

  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em;
    border: 0.75rem solid transparent;
    border-top: none;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0%, -50%);
  font-size: 16px;
  line-height: 140%;
  color: #1f1f1f;
  transition: all 100ms ease;

  .styled-input:focus + &,
  .styled-input:not(:placeholder-shown) + & {
    top: 0px;
    font-size: 12px;
    line-height: 140%;
    color: #051839;
    background-color: #fff;
  }
`;

export const AddButton = styled.button`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 8px;

  width: 302px;
  height: 56px;

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  background: #204154;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease;

  &:focus-visible {
    background: #6998aa;
  }
  &:active {
    background: #051839;
  }

  @media (hover: hover) {
    &:hover {
      background: #6998aa;
    }
  }
`;
