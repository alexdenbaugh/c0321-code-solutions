import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      time: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handlePlay() {
    if (this.state.play) {
      this.setState({ play: false });
      clearInterval(this.timerID);
    } else {
      this.setState({ play: true });
      this.timerID = setInterval(
        () => this.tick(), 1000
      );
    }
  }

  reset() {
    if (!this.state.play) {
      this.setState({ time: 0 });
    }
  }

  tick() {
    let time = this.state.time;
    time++;
    this.setState({ time: time });
  }

  render() {
    if (this.state.play) {
      return (
        <div className="container">
          <div onClick={this.reset} className="count">
            <span> {this.state.time} </span>
          </div>
          <div onClick={this.handlePlay} className="play">
            <i className="fas fa-pause"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div onClick={this.reset} className="count">
            <span> {this.state.time} </span>
          </div>
          <div onClick={this.handlePlay} className="play">
            <i className="fas fa-play"></i>
          </div>
        </div>
      );
    }
  }
}

export default StopWatch;
