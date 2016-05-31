/* eslint no-unused-vars: "off" */
import todoList from 'component/todoList';
import visibilityFilter from 'component/visibilityFilter';
import {combineReducers} from 'redux';

const todoApp = combineReducers({
  todoList,
  visibilityFilter,
});

export default todoApp;
