import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AuthCode from './callback/AuthCode';
import PKCE from './containers/PKCE';

const CALLBACK_PATH = '/login/callback';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <Switch>
            <Route path={CALLBACK_PATH} component={AuthCode} />
            <Route path="/" component={PKCE} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
