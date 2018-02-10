import React, { Component } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { blink, grow } from '../../styles/animations';
import { white } from '../../styles/colors';

const TypeWriterWrapper = styled.div`
  display: flex;
`;

const TypeWriterStyle = styled.div`
  width: auto;
  font-family: 'Stint Ultra Expanded', cursive;
  letter-spacing: 1px;
  padding-right: 2px;
  color: ${white};
  ${({ textTypingCompleted }) =>
    textTypingCompleted
      ? 'border-right: none'
      : `border-right: 1px solid; animation: ${blink} 0.75s step-end infinite;`};
`;

class TypeWriter extends Component {
  static defaultProps = {
    typingInterval: 125,
  };

  state = {
    typedText: '',
  };

  typeText = typingInterval => {
    const { text } = this.props;
    if (!text) return;

    const type = () => {
      const { typedText } = this.state;
      this.setState({
        typedText: typedText + text[typedText.length],
      });
      if (typedText.length + 1 !== text.length) {
        setTimeout(type, typingInterval);
      }
    };

    type();
  };

  componentDidMount() {
    const { typingInterval } = this.props;
    this.typeText(typingInterval);
  }

  render() {
    const { text } = this.props;
    const { typedText } = this.state;
    const textTypingCompleted = text.length === typedText.length;

    return (
      <TypeWriterWrapper>
        <TypeWriterStyle textTypingCompleted={textTypingCompleted}>
          {typedText}
        </TypeWriterStyle>
      </TypeWriterWrapper>
    );
  }
}

TypeWriter.props = {
  text: string.isRequired,
};

export default TypeWriter;
