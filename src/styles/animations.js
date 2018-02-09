import { keyframes } from 'styled-components';

export const Inflate = keyframes`
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
`;

export const Pulse = keyframes`
  from {
    ${'' /* transform: scale(0.4); */}
    opacity: 0.75;
  }
  50% {
    ${'' /* transform: scale(0.5); */}
    opacity: 1;
  }
  to {
    ${'' /* transform: scale(0.4); */}
    opacity: 0.75;
  }
`;
