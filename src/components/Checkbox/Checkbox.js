import React from 'react';
import styled from 'styled-components';
import Switch from '../../containers/Switch';
import { red, white } from '../../styles/colors';

const CheckboxWrapper = styled.div`
  border: 2px solid ${red};
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  transition: background-color 0.1s ease-in;
  background-color: ${({ isChecked }) => (isChecked ? red : white)};
  &:hover {
    cursor: pointer;
  }
`;

const CheckboxTick = styled.span`
  width: 40%;
  height: 80%;
  box-sizing: border-box;
  border-style: solid;
  border-width: 0 3px 3px 0;
  border-radius: 0px 0 2px 0px;
  transform: rotate(45deg);
  transition: border-color 0.1s ease-in;
  border-color: ${({ isChecked }) => (isChecked ? white : 'transparent')};
`;

const Checkbox = ({ onSwitchOn, onSwitchOff }) => (
  <Switch
    onSwitchOn={onSwitchOn}
    onSwitchOff={onSwitchOff}
    component={({ isSwitched, toggleSwitch }) => (
      <CheckboxWrapper onClick={toggleSwitch} isChecked={isSwitched}>
        <CheckboxTick isChecked={isSwitched} />
      </CheckboxWrapper>
    )}
  />
);

export default Checkbox;
