import React from 'react';
import AppState from './AppState';
import { Prompt, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPromptOnNav: false
    };
  }
  savePassword(event) {
    this.setState({
      password: event.target.value,
      showPromptOnNav: event.target.value.length > 0
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.password === 'password') {
      AppState.login();
      this.props.history.replace('/admin');
    }
    else {
      alert('Password is wrong.');
    }
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <h3>Please sign in</h3>

        <input type="password"
          placeholder="Type password"
          value={this.state.password}
          onChange={this.savePassword.bind(this)} />
        <button type="submit"> Submit </button>
        <Prompt when={this.state.showPromptOnNav}
          message="Are you sure? Your data will be lost." />
      </form>
    );
  }
}
const LoginFormWithProps = withRouter(LoginForm);
class LoginComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>Please sign in.</h3>
        <LoginFormWithProps></LoginFormWithProps>
      </div>
    );
  }
}

export default LoginComponent;