import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import FistBump from './components/FistBump';
import TypeWriter from './components/TypeWriter';
import IsActive from './containers/IsActive';
import { FadeInAndOut } from './containers/Fade';
import { red, white, gray } from './styles/colors';

require('../favicon.ico');

const Page = styled.div`
  padding: 15vh 10vw 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, ${red}, ${gray});
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
  margin-bottom: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconGrid = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;
  align-items: center;
  > * {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const IconStyle = styled(FontAwesome)`
  color: ${white};
  font-size: ${({ fontSize = 30 }) => fontSize}px;
  transition: transform 0.2s ease-in;
  &:hover {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Icon = ({ ...props }) => (
  <span>
    <IconStyle {...props} />
  </span>
);

const Link = styled.a`
  opacity: 0.8;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 1;
  }
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  border: 1px solid ${white};
  border-radius: 3px;
  padding: 5px;
  font-family: 'Michroma', sans-serif;
`;

const TypeWritersWrapper = styled.div`
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  width: 320px;
  display: flex;
  opacity: 0.8;
  transition: opacity 0.2s ease-in;
  &:hover {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    opacity: 1;
  }
`;

ReactDOM.render(
  <Page>
    <TitleWrapper>
      <Title>rogue-ui</Title>
      <Subtitle>W.i.P</Subtitle>
      <FistBump />
      <br />
      <IsActive
        component={({ isActive, activate, deactivate }) => (
          <TypeWritersWrapper onMouseOver={activate} onMouseLeave={deactivate}>
            <TypeWriter text="npm install rogue-ui --save" />
            <FadeInAndOut animationDuration={0.3} isVisible={isActive}>
              <Icon
                fontSize={15}
                name=" fas fa-copy"
                style={{ marginLeft: '5px' }}
              />
            </FadeInAndOut>
          </TypeWritersWrapper>
        )}
      />
      <br />
      <IsActive
        component={({ isActive, activate, deactivate }) => (
          <TypeWritersWrapper onMouseOver={activate} onMouseLeave={deactivate}>
            <TypeWriter text="yarn add rogue-ui" />
            <FadeInAndOut animationDuration={0.3} isVisible={isActive}>
              <Icon
                fontSize={15}
                name=" fas fa-copy"
                style={{ marginLeft: '5px' }}
              />
            </FadeInAndOut>
          </TypeWritersWrapper>
        )}
      />
      <br />
      <br />
      <br />
      <LinkButton href="./styleguide/index.html" target="_blank">
        <Subtitle style={{ margin: 0 }}>Components</Subtitle>
      </LinkButton>
      <IconGrid>
        <Link href="https://github.com/enzoborgfrantz/rogue-ui" target="_blank">
          <Icon fontSize={20} name="github" />
        </Link>
        <Link href="https://www.npmjs.com/package/rogue-ui" target="_blank">
          <Icon fontSize={40} name=" fab fa-npm" />
        </Link>
      </IconGrid>
    </TitleWrapper>
  </Page>,
  document.getElementById('root')
);
