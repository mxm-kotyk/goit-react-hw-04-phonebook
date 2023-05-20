import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  line-height: 140%;
  color: #1f1f1f;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  width: 302px;
  height: 48px;
  padding: 8px 16px;
  padding-left: 50px;
  gap: 8px;
  border: 1px solid #6998aa;
  border-radius: 100px;
  font-family: inherit;
  font-size: 16px;
  line-height: 150%;
  transition: all 150ms ease;

  &:focus-visible {
    border: 1px solid #051839;
    outline: 2px solid #6998aa;
  }

  &::placeholder {
    color: #6998aa;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  bottom: 8px;
  left: 16px;
  fill: #6998aa;
`;
