/* eslint no-unused-vars: "off" */
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import app from './app';
import todoApp from './todoApp';

const t = app();
console.log(t);

const todoAppStore = createStore(todoApp);

console.log('Initial state:');
console.log(todoAppStore.getState());
console.log('---------------');

console.log('ADD TODO:');
todoAppStore.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux',
});
console.log(todoAppStore.getState());
console.log('---------------');

console.log('ADD TODO:');
todoAppStore.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Eat dinner',
});
console.log(todoAppStore.getState());
console.log('---------------');

console.log('TOGGLE TODO:');
todoAppStore.dispatch({
  type: 'TOGGLE_TODO',
  id: 1,
});
console.log(todoAppStore.getState());
console.log('---------------');

console.log('SET VISIBILITY FILTER:');
todoAppStore.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'COMPLETED',
});
console.log(todoAppStore.getState());
console.log('---------------');
