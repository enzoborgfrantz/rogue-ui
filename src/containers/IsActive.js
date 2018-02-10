import { Component } from 'react';

class IsActive extends Component {
  state = {
    isActive: false,
  };

  activate = () => {
    this.setState({ isActive: true });
  };

  deactivate = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    const { component } = this.props;

    return component({
      isActive,
      activate: this.activate,
      deactivate: this.deactivate,
      ...this.props,
    });
  }
}

export default IsActive;
