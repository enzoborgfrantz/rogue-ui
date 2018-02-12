import React from 'react';
import styled from 'styled-components';
import { gray, red } from '../../styles/colors';

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInputStyle = styled.input`
  width: 100%;
  font-size: 18px;
  outline: none;
  border: none;
  border: 1px solid ${gray};
  border-radius: 3px;
  padding: 5px;
  font-weight: 300;
  appearance: none;
  box-sizing: border-box;
  ::placeholder {
    text-transform: capitalize;
  }
`;

const SmallText = styled.div`
  color: ${gray};
  font-family: system-ui;
  text-transform: capitalize;
  font-size: 12px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  ${({ visible }) => visible && `transition: opacity 0.2s ease-in;`};
`;

const ErrorText = styled(SmallText)`
  color: ${red};
`;

const CloseButton = styled.button`
  position: absolute;
  font-size: 18px;
  font-weight: 300;
  height: 100%;
  right: 5px;
  top: 0;
  height: 100%
  appearance: none;
  background: transparent;
  border: none;
  transition: transform 0.25s ease-in;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const TextInputContainer = styled.div`
  position: relative;
`;

const TextInput = ({ type, placeholder, value, setValue, error }) => (
  <TextInputWrapper>
    <SmallText visible={!!value}>{placeholder}</SmallText>
    <TextInputContainer>
      <TextInputStyle
        type={type}
        placeholder={placeholder}
        onChange={({ target: { value } }) => setValue(value)}
        value={value}
      />
      {value && <CloseButton onClick={() => setValue('')}>×</CloseButton>}
    </TextInputContainer>
    {error && <ErrorText visible={!!error}>{error}</ErrorText>}
  </TextInputWrapper>
);

export default TextInput;
