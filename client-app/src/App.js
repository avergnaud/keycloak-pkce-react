import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CALLBACK_PATH } from './constants';
import logo from './logo.svg';
import './App.css';
import Callback from './callback/Callback';
import PKCE from './containers/PKCE';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <Switch>
            <Route path={CALLBACK_PATH} component={Callback} />
            <Route path="/" component={PKCE} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
