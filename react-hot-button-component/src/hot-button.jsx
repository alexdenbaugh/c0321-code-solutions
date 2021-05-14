import React from 'react';

class HotButton extends React.Component {
  constructor(params) {
    super(params);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let click = this.state.clickCount;
    click++;
    this.setState({ clickCount: click });
  }

  render() {
    if (this.state.clickCount < 3) {
      return (
        <button onClick={this.handleClick} className="coldest">Hot Button</button>
      );
    } else if (this.state.clickCount < 6) {
      return (
        <button onClick={this.handleClick} className="cold">Hot Button</button>
      );
    } else if (this.state.clickCount < 9) {
      return (
        <button onClick={this.handleClick} className="warm">Hot Button</button>
      );
    } else if (this.state.clickCount < 12) {
      return (
        <button onClick={this.handleClick} className="warmer">Hot Button</button>
      );
    } else if (this.state.clickCount < 15) {
      return (
        <button onClick={this.handleClick} className="hot">Hot Button</button>
      );
    } else {
      return (
        <button onClick={this.handleClick} className="hottest">Hot Button!!!</button>
      );
    }
  }
}

export default <HotButton />;
