/* eslint no-unused-vars: "off" */
import template from './TodoItem.jade';
import './TodoItem.css';

const todoItem = (state, action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    }
    case 'TOGGLE_TODO': {
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed,
        };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default todoItem;
