/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import ContentLayout from 'containers/ContentLayout';
import configureStore from './configureStore';
import TodoWidget from 'components/TodoWidget';

const mode = process.env.MODE || 'DEBUG';

const dispatchWrap = store => {
  const rawDispatch = store.dispatch;
  return (action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c curr state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  });
};

const app = () => {
  const store = configureStore();
  if (mode === 'DEBUG') {
    store.dispatch = dispatchWrap(store);
  }
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
