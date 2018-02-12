import { Component } from 'react';
import { bool, func } from 'prop-types';

class Switch extends Component {
  static defaultProps = {
    onSwitchOn: () => {},
    onSwitchOff: () => {},
    isSwitched: false,
  };

  state = {
    isSwitched: this.props.isSwitched,
  };

  toggleSwitch = () => {
    const { onSwitchOn, onSwitchOff } = this.props;
    const { isSwitched } = this.state;
    this.setState({ isSwitched: !isSwitched }, () => {
      this.state.isSwitched ? onSwitchOn() : onSwitchOff();
    });
  };

  render() {
    const { isSwitched } = this.state;
    const { component } = this.props;

    return component({
      isSwitched,
      toggleSwitch: this.toggleSwitch,
    });
  }
}

Switch.propTypes = {
  isSwitched: bool,
  onSwitchOn: func.isRequired,
  onSwitchOff: func.isRequired,
};

export default Switch;
