import React from "react";
import AppState from "./AppState";
import { Prompt, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      showPromptOnNav: false
    };
  }
  savePassword(event) {
    this.setState({
      password: event.target.value,
      showPromptOnNav: event.target.value.length > 0
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const email1 = e.target.email.value;
    const password1 = e.target.password.value;
    let obj = {
      email: email1,
      password: password1
    };

    let stringObj = JSON.stringify(obj);
    console.log("pas", obj);
    fetch("/api/auth/login", {
      method: "POST",
      credentials: "include",
      body: stringObj,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      // .then(res => res.json())
      .then(response => console.log("Success"))
      .catch(error => console.error("Error: ", error));
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                      />
                      <label htmlFor="inputEmail">Email address </label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className=" btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <hr />
                    <button
                      className="btn btn-lg btn-facebook btn-block text-uppercase"
                      type="submit"
                    >
                      <i className="btn btn-lg btn-sign-up btn-block text-uppercase" />
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const LoginFormWithProps = withRouter(LoginForm);
class LoginComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>Please sign in.</h3>
        <LoginFormWithProps />
      </div>
    );
  }
}

export default LoginComponent;

// <form onSubmit={this.handleFormSubmit.bind(this)}>
//   <h3>Please sign in</h3>

//   <input type="password"
//     placeholder="Type password"
//     value={this.state.password}
//     onChange={this.savePassword.bind(this)} />
//   <button type="submit"> Submit </button>
//   <Prompt when={this.state.showPromptOnNav}
// //     message="Are you sure? Your data will be lost." />
// // </form>
// handleFormSubmit(event) {
//   event.preventDefault();
//   if (this.state.password === "password") {
//     AppState.login();
//     this.props.history.replace("/admin");
//   } else {
//     alert("Password is wrong.");
//   }
// }
