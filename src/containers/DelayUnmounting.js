import { Component } from 'react';
import { bool, number, func } from 'prop-types';
import isEqual from 'lodash/isEqual';

class DelayUnmounting extends Component {
  state = {
    isVisible: this.props.isVisible,
    willUnmount: false,
  };

  componentWillReceiveProps(nextProps) {
    const { isVisible, animationDuration } = this.props;
    const delayInMS = animationDuration * 1000;

    if (isVisible && !nextProps.isVisible) {
      this.setState({ willUnmount: true });
      setTimeout(() => this.setState({ isVisible: false }), delayInMS);
    } else if (!isVisible && nextProps.isVisible) {
      this.setState({ isVisible: true, willUnmount: false });
    }
  }

  render() {
    const { component, ...rest } = this.props;
    const { isVisible, willUnmount } = this.state;
    return isVisible ? component({ willUnmount, ...rest }) : null;
  }
}

DelayUnmounting.PropTypes = {
  isVisible: bool.isRequired,
  animationDuration: number.isRequired,
  component: func.isRequired,
};

export default DelayUnmounting;
