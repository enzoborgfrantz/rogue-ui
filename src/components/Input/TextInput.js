import React from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextInputStyle = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  font-weight: 300;
  appearance: none;
  ::placeholder {
    text-transform: capitalize;
  }
`;

const Title = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  ${({ visible }) => visible && `transition: opacity 0.2s ease-in;`};
`;

const CloseButton = styled.button`
  position: absolute;
  font-size: 12px;
  right: 5px;
  top: calc(50% - 5px);
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

const TextInput = ({
  type,
  placeholder,
  value,
  setValue,
  clearValue,
  error,
  validate,
}) => (
  <TextInputWrapper>
    <Title visible={!!value}>{placeholder}</Title>
    <TextInputStyle
      type={type}
      placeholder={placeholder}
      onChange={({ target: { value } }) => setValue(value)}
      value={value}
    />
    {value && <CloseButton onClick={clearValue}>×</CloseButton>}
    {error && <Title visible={!!error}>{error}</Title>}
  </TextInputWrapper>
);

export default TextInput;
