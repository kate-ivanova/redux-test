import visibilityFilter from 'reducers/visibilityFilter';
import todoList, * as fromTodoList from 'reducers/todoList';
import {combineReducers} from 'redux';

const todoApp = combineReducers({
  todoList,
  visibilityFilter,
});

export default todoApp;

export const getVisibleTodos = (state, filter) => (
  fromTodoList.getVisibleTodos(state.todoList, filter)
);
