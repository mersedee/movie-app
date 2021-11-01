import React from 'react';
import { GlobalProvider } from 'context/GlobalState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import '../node_modules/rc-tabs/assets/index.css';
import '../node_modules/react-responsive-modal/styles.css';
import './App.scss';

import HomePage from 'pages/Home';
import MovieDetail from 'pages/MovieDetail';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={MovieDetail} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
