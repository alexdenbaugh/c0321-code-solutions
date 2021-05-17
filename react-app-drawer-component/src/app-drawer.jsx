import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    if (this.state.menu === false) {
      this.setState({ menu: true });
    } else {
      this.setState({ menu: false });
    }
  }

  render() {
    if (this.state.menu === true) {
      return (
        <div>
          <div className="menu">
            <div className="drawer">
              <a onClick={this.handleMenu} href="#" id="menu">Menu</a>
              <a onClick={this.handleMenu} href="#">About</a>
              <a onClick={this.handleMenu} href="#">Get Started</a>
              <a onClick={this.handleMenu} href="#">Sign In</a>
            </div>
            <div onClick={this.handleMenu} className="shade"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i onClick={this.handleMenu} className="fas fa-bars"></i>
        </div>
      );
    }
  }
}

export default Drawer;
