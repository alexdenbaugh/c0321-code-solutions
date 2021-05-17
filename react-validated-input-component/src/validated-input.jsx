import React from 'react';

const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

class ValidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      valid: false,
      checkOrX: false,
      error: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password.length === 0) {
      this.setState({
        valid: false,
        error: 'A password is required.'
      });
    } else if (this.state.password.length < 8) {
      this.setState({
        valid: false,
        error: 'Your password is too short.'
      });
    } else if (this.state.password.search(/([A-Z])\w+/g) === -1 || this.state.password.search(/\d/g) === -1 || this.state.password.split('').filter(char => specialChars.includes(char)).length === 0) {
      this.setState({
        valid: false,
        error: 'Your password must contain a capital letter, number and a special character.'
      });
    } else {
      this.setState({
        valid: true,
        error: ''
      });
    }
    this.setState({ checkOrX: true });
  }

  render() {
    if (this.state.valid === false && this.state.checkOrX === true) {
      return (
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input">
            <input onChange={this.handlePassword} type="password" name="password" id="password" value={this.state.password}></input>
            <i className="fas fa-times"></i>
          </div>
          <div>
            <p> {this.state.error} </p>
          </div>
        </form>
      );
    } else if (this.state.valid === true && this.state.checkOrX === true) {
      return (
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input">
            <input onChange={this.handlePassword} type="password" name="password" id="password" value={this.state.password}></input>
            <i className="fas fa-check"></i>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input">
            <input onChange={this.handlePassword} type="password" name="password" id="password" value={this.state.password}></input>
          </div>
        </form>
      );
    }
  }
}

export default ValidInput;
