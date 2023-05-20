import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 302px;
`;

export const ContactText = styled.p`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  gap: 8px;
`;

export const ContactName = styled.span`
  font-size: 16px;
  line-height: 140%;
  color: #1f1f1f;
`;

export const ContactNumber = styled.span`
  font-size: 14px;
  line-height: 140%;
  color: #6998aa;
`;

export const CallButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 40px;
  height: 40px;
  background: #204154;
  border-radius: 8px;
  transition: background 200ms ease;

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

export const ContactIcon = styled.svg`
  fill: #fff;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 40px;
  height: 40px;
  background: #c75715;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 200ms ease;

  &:focus-visible {
    background: #ff7906;
  }

  &:active {
    background: #d86b28;
  }

  @media (hover: hover) {
    &:hover {
      background: #ff7906;
    }
  }
`;
