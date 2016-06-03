/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import ContentLayout from 'containers/ContentLayout';
import configureStore from './configureStore';

const app = () => {
  const store = configureStore();
  ReactDOM.render(
    <div>
      <h1>Redux test app</h1>
      <ContentLayout store={store}/>
    </div>
    ,
    document.getElementById('content-layout')
  );
};

export default app;
