/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoWidget from './components/TodoWidget';
import configureStore from './configureStore';

const app = () => {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <TodoWidget />
    </Provider>,
    document.getElementById('todo-list')
  );
};

export default app;
