import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
serviceWorker.register();
