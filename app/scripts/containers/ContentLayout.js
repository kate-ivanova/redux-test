/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import TodoWidget from 'components/TodoWidget';

let ContentLayout = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/(:filter)" component={TodoWidget} />
    </Router>
  </Provider>,
);

ContentLayout = connect()(ContentLayout);

export default ContentLayout;
