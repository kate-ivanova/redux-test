/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import ContentLayout from 'containers/ContentLayout';
import configureStore from './configureStore';
import TodoWidget from 'components/TodoWidget';

const app = () => {
  const store = configureStore();
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <div>
      <h1>Redux test app</h1>
      <Provider store={store}>
        <Router history={history} >
          <Route path="/(:filter)" component={TodoWidget} />
        </Router>
      </Provider>
    </div>,
    document.getElementById('content-layout')
  );
};

export default app;
