import { keyframes } from 'styled-components';
import { white } from './colors';

export const inflate = keyframes`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  from {
    opacity: 0.75;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.75;
  }
`;

export const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const blink = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: ${white};
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
