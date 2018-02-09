import { Component } from 'react';
import { func } from 'prop-types';

class Inflatable extends Component {
  static defaultProps = {
    inflationDurationInMS: 750,
    onFullyInflated: () => console.log('track fully inflated'),
    component: func.isRequired,
  };

  state = {
    max: false,
    inflating: false,
  };

  inflate = () => {
    const { inflationDurationInMS, onFullyInflated } = this.props;

    this.setState({ inflating: true });
    setTimeout(() => {
      const { inflating } = this.state;
      if (inflating) {
        this.setState({ max: true });
        onFullyInflated && onFullyInflated();
      }
    }, inflationDurationInMS);
  };

  deflate = () => {
    this.setState({ inflating: false, max: false });
  };

  render() {
    const { max, inflating } = this.state;
    const { inflationDurationInMS, component } = this.props;
    const animationDuration = inflationDurationInMS / 1000;

    return component({
      animationDuration,
      max,
      inflating,
      inflate: this.inflate,
      deflate: this.deflate,
    });
  }
}

export default Inflatable;
