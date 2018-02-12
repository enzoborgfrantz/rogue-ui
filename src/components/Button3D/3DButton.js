import React from 'react';
import styled from 'styled-components';
import { red } from '../../styles/colors';

const Button3DStyle = styled.button`
  appearance: none;
  background-color: ${red};
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

const Button3D = ({ children }) => <Button3DStyle>{children}</Button3DStyle>;

export default Button3D;
