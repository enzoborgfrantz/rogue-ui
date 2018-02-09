import React, { Component } from 'react';
import styled from 'styled-components';
import Inflatable from '../../containers/Inflatable';
import { Inflate, Pulse } from '../../styles/animations';

const FistBumpWrapper = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const FistBumpStyle = styled.div`
  text-align: center;
  font-size: 120px;
  transform: scale(0.4);
  animation: ${Pulse} 3s infinite;
  animation-timing-function: ease;
  ${({ inflating, animationDuration }) =>
    inflating &&
    `
    animation: ${Inflate} ${animationDuration}s 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  `};
`;

const ScreenCrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 120px;
  margin: -85px -75px;
  background-position: center;
  background-size: contain;
  background: url(http://www.pngmart.com/files/1/Broken-Glass-PNG-File-348x279.png);
  pointer-events: none;
  background-repeat: round;
  z-index: 100;
  ${({ show }) => `opacity: ${Number(show)}`};
  transition: all 0.1s linear;
  transform: rotate(180deg);
`;

const FistBump = ({ inflationDurationInMS, onFullyInflated }) => (
  <Inflatable
    component={({ animationDuration, max, inflating, inflate, deflate }) => (
      <FistBumpWrapper
        onMouseDown={inflate}
        onMouseUp={() => !max && deflate()}
      >
        <ScreenCrack show={max} />
        <FistBumpStyle
          inflating={inflating}
          animationDuration={animationDuration}
        >
          👊🏻
        </FistBumpStyle>
      </FistBumpWrapper>
    )}
  />
);

export default FistBump;
