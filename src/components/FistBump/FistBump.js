import React, { Component } from 'react';
import styled from 'styled-components';
import Inflatable from '../../containers/Inflatable';
import { inflate } from '../../styles/animations';
import { FadeIn } from '../../containers/Fade';

const FistBumpWrapper = styled.div`
  user-select: none;
  position: relative;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const FistBumpStyle = styled.div`
  user-select: none;
  text-align: center;
  background: url(https://i.imgur.com/KwJVsF5.png);
  width: 120px;
  height: 120px;
  background-size: contain;
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
  user-select: none;
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
          {/* 👊🏻 */}
        </FistBumpStyle>
      </FistBumpWrapper>
    )}
  />
);

export default FistBump;
