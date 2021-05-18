import React from 'react';

const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

class ValidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: '',
      icon: 'hidden'
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({
        error: 'A password is required.',
        icon: 'fas fa-times'
      });
    } else if (event.target.value.length < 8) {
      this.setState({
        error: 'Your password is too short.',
        icon: 'fas fa-times'
      });
    } else if (event.target.value.search(/([A-Z])\w+/g) === -1 || event.target.value.search(/\d/g) === -1 || event.target.value.split('').filter(char => specialChars.includes(char)).length === 0) {
      this.setState({
        error: 'Your password must contain a capital letter, number and a special character.',
        icon: 'fas fa-times'
      });
    } else {
      this.setState({
        error: '',
        icon: 'fas fa-check'
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div className="input">
          <input onChange={this.handlePassword} type="password" name="password" id="password" value={this.state.password}></input>
          <i className={this.state.icon}></i>
        </div>
        <div>
          <p> {this.state.error} </p>
        </div>
      </>
    );
  }
}

export default ValidInput;
