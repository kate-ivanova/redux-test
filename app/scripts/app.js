/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import ContentLayout from './components/ContentLayout';
import configureStore from './configureStore';

const app = () => {
  const store = configureStore();
  ReactDOM.render(
    <ContentLayout store={store}/>,
    document.getElementById('content-layout')
  );
};

export default app;
