import React, { Component } from 'react';
import styled from 'styled-components';
import Inflatable from '../../containers/Inflatable';
import { inflate } from '../../styles/animations';
import { FadeIn } from '../../containers/Fade';

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
  z-index: -1;
  ${({ inflating, animationDuration }) =>
    inflating &&
    `
    animation: ${inflate} ${animationDuration}s 1;
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
  transform: rotate(180deg);
`;

const FistBump = ({ inflationDurationInMS, onFullyInflated }) => (
  <Inflatable
    component={({ animationDuration, max, inflating, inflate, deflate }) => (
      <FistBumpWrapper
        onMouseDown={inflate}
        onMouseUp={() => !max && deflate()}
      >
        <FadeIn isVisible={max} animationDuration={0.1}>
          <ScreenCrack />
        </FadeIn>
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
