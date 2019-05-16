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


// import AppState from './components/AppState';

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

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
