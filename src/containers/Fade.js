import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import DelayUnmounting from './DelayUnmounting';
import { fadeIn, fadeOut } from '../styles/animations';

const FadeInWrapper = styled.div`
  opacity: 0;
  animation: ${({ animationDuration = 1 }) =>
    `${fadeIn} ${animationDuration}s ease-in 1 forwards`};
`;

export const FadeIn = ({ isVisible, animationDuration, children }) =>
  isVisible && (
    <FadeInWrapper animationDuration={animationDuration}>
      {children}
    </FadeInWrapper>
  );

const FadeInAndOutWrapper = styled.div`
  opacity: 0;
  animation: ${({ willUnmount, animationDuration }) => `
    ${willUnmount ? fadeOut : fadeIn}
    ${animationDuration}s ease-in 1 forwards
    `};
`;

export const FadeInAndOut = ({ animationDuration, isVisible, children }) => (
  <DelayUnmounting
    animationDuration={animationDuration}
    isVisible={isVisible}
    component={({ willUnmount }) => (
      <FadeInAndOutWrapper
        willUnmount={willUnmount}
        animationDuration={animationDuration}
      >
        {children}
      </FadeInAndOutWrapper>
    )}
  />
);
