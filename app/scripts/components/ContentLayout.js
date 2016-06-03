/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import TodoWidget from 'components/TodoWidget';

const ContentLayout = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TodoWidget} />
    </Router>
  </Provider>,
);

export default ContentLayout;
