import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleSwitch: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.toggleSwitch) {
      this.setState({ toggleSwitch: false });
    } else {
      this.setState({ toggleSwitch: true });
    }
  }

  render() {
    if (this.state.toggleSwitch) {
      return (
        <div className="container">
          <div onClick={this.handleToggle} className="slot on">
            <div className="switch"></div>
          </div>
          <div>
            <h3 onClick={this.handleToggle} className="label">ON</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div onClick={this.handleToggle} className="slot off">
            <div className="switch"></div>
          </div>
          <div>
            <h3 onClick={this.handleToggle} className="label">OFF</h3>
          </div>
        </div>
      );
    }
  }
}

export default Switch;
