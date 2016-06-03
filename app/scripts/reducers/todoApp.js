import visibilityFilter from 'reducers/visibilityFilter';
import todoList from 'reducers/todoList';
import {combineReducers} from 'redux';

const todoApp = combineReducers({
  todoList,
  visibilityFilter,
});

export default todoApp;
