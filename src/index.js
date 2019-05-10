import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';

import './scss/styles.scss';
import AdminComponent from './components/AdminComponent';
import HeaderComponent from './components/HeaderComponent';
import CategoriesComponent from './components/CategoriesComponent';
import PostsComponent from './components/PostsComponent';
import ProfileComponent from './components/ProfileComponent';
import ContactComponent from './components/ContactComponent';
import AboutComponent from './components/AboutComponent';
import LoginComponent from './components/LoginComponent';

// sample data (header info not really being used)
import {
  arrHeaders,
  arrUsers,
  arrPosts,
  arrCategories
} from './feSettings.js';

// import AppState from './components/AppState';

console.log("arrPosts", arrPosts);
console.log("arrCategories", arrCategories);

// views using sample data
const objUser = arrUsers.filter(x => x.id == 1).pop();
console.log('objUser', objUser);
const MyProfilePage = (props) => <ProfileComponent objUser={objUser} />;
const CategoriesPage = (props) => <CategoriesComponent arrCategories={arrCategories} />;
const AboutPage = (props) => <AboutComponent />;
const HomePage = (props) => <PostsComponent arrPosts={arrPosts} />;

// application entry component
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <HeaderComponent {...arrHeaders} />
          {/* Linking R O U T E S TO COMPONENTS */}
          <div className="views">
            <Switch>
              <Route exact={true} path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/posts/:userId" component={HomePage} />
              <Route path="/users/:id" component={MyProfilePage} />
              <Route path="/genres" component={CategoriesPage} />
              <Route path="/admin" component={AdminComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route render={() => <h1>404 Error</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));