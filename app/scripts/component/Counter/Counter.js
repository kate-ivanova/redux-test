/* eslint no-unused-vars: "off" */
import template from './Counter.jade';
import './Counter.css';
import {createStore} from 'redux';
import React from 'react';

const counter = (state = 0, action = {type: 'DEFAULT'}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counter;
