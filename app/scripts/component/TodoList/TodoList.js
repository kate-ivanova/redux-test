/* eslint no-unused-vars: "off" */
/* eslint no-else-return: "off" */
import template from './TodoList.jade';
import './TodoList.css';
import todoItem from 'component/TodoList/TodoItem';

const todoList = (state = [], action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case 'ADD': {
      return [
        ...state,
        todoItem(undefined, action),
      ];
    }
    case 'TOGGLE': {
      return state.map(item => todoItem(item, action));
    }
    default: {
      return state;
    }
  }
};

export default todoList;