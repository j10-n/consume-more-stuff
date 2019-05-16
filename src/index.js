<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ErrorBoundary from './components/ErrorBoundary';

// sample data (header info not really being used)
import {
  arrHeaders,
  // arrUsers,
  arrRoutes,
  // arrPosts,
  // arrCategories
} from './feSettings.js';

=======
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";

import "./scss/styles.scss";
import AdminComponent from "./components/AdminComponent";
import HeaderComponent from "./components/HeaderComponent";
import CategoriesComponent from "./components/CategoriesComponent";
import PostsComponent from "./components/PostsComponent";
import ProfileComponent from "./components/ProfileComponent";
import ContactComponent from "./components/ContactComponent";
import AboutComponent from "./components/AboutComponent";
import LoginComponent from "./components/LoginComponent";

// sample data (header info not really being used)
import { arrHeaders, arrUsers, arrPosts, arrCategories } from "./feSettings.js";

// import AppState from './components/AppState';

console.log("arrPosts", arrPosts);
console.log("arrCategories", arrCategories);

// views using sample data
const objUser = arrUsers.filter(x => x.id == 1).pop();
console.log("objUser", objUser);
const MyProfilePage = props => <ProfileComponent objUser={objUser} />;
const CategoriesPage = props => (
  <CategoriesComponent arrCategories={arrCategories} />
);
const AboutPage = props => <AboutComponent />;
let HomePage = props => <PostsComponent arrPosts={arrPosts} />;
//  HomePage = (props) => <PostsComponent />;
>>>>>>> 34d51babe0e08493d37b8e4e64293974531f1a17

// application entry component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1
    };
  }
  render() {
    console.log("Data entering app: ", this.props);
    return (
      // <Router>
        <div id='app'>
          <NavbarComponent {...arrHeaders} userId={this.state.userId} />
          {/* Linking R O U T E S TO COMPONENTS */}
          <div className="views">
            <Switch>
              {arrRoutes.map((route,idx) => (
                // <ErrorBoundary>
                <Route
                  key={`${idx}`}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
                // </ErrorBoundary>
              ))}
              <Route key='lastxxx' render={() => <h1>404 Error</h1>} />
            </Switch>
          </div>
        </div>
      // </Router>
    );
  }
}

<<<<<<< HEAD
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

=======
ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 34d51babe0e08493d37b8e4e64293974531f1a17
