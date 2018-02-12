import React from 'react';
import styled from 'styled-components';
import { red, white, gray } from '../../styles/colors';

const TransparentButtonStyle = styled.button`
  appearance: none;
  background-color: transparent;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${gray};
  font-size: 12px;
  font-weight: 300;
  outline: none;
  padding: 10px;
  transition: background-color 0.3s ease-in;
  width: 100%;
  border: 1px solid ${red};

  &:hover {
    background-color: ${red};
    border-color: transparent;
    color: ${white};
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
    color: ${gray};
    border-color: ${red};
  }
`;

const TransparentButton = ({ children }) => (
  <TransparentButtonStyle>{children}</TransparentButtonStyle>
);

export default TransparentButton;
