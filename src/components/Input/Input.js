import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from './TextInput';

class Input extends Component {
  state = {
    value: '',
    error: '',
  };

  setValue = value => {
    this.setState({ value });
  };

  clearValue = () => {
    this.setValue('');
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    const { value, error } = this.state;

    return this.props.render({
      value,
      error,
      setValue: this.setValue,
      clearValue: this.clearValue,
      setError: this.setError,
      ...this.props,
    });
  }
}

Input.defaultProps = {
  render: TextInput,
};

export default Input;
