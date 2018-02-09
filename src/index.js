import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import FistBump from './components/FistBump';
import { white } from './styles/colors';
import FontAwesome from 'react-fontawesome';
require('../favicon.ico');

const Page = styled.div`
  width: 80vw;
  margin: 20vh auto 0;
`;

const Title = styled.h1`
  font-family: 'Michroma', sans-serif;
  font-size: 40px;
  margin-bottom: 0;
  color: ${white};
`;

const Subtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: ${white};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GithubIcon = styled(FontAwesome)`
  position: absolute;
  bottom: 25px;
  color: ${white};
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

ReactDOM.render(
  <Page>
    <TitleWrapper>
      <Title>rogue-ui</Title>
      <Subtitle>W.i.P</Subtitle>
      <FistBump />
      <GithubIcon name="github" />
    </TitleWrapper>
  </Page>,
  document.getElementById('root')
);
