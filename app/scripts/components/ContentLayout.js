/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoWidget from 'components/TodoWidget';

const ContentLayout = ({store}) => (
  <Provider store={store}>
    <TodoWidget />
  </Provider>,
);

export default ContentLayout;
