import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  appearance: none;
  background-color: #cf4647;
  border: none;
  border-radius: 4px;
  box-shadow: inset -3px -4px 0 rgba(27, 31, 35, 0.12);
  box-sizing: border-box;
  color: white;
  font-size: 12px;
  font-weight: 300;
  outline: none;
  padding: 10px;
  transition: all 0.2s ease-in;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
  }
`;

const Button = () => <ButtonStyle>Click me</ButtonStyle>;

export default Button;
