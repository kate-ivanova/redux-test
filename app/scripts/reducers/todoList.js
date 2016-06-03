/* eslint no-unused-vars: "off" */
/* eslint no-else-return: "off" */
import todoItem from 'reducers/todoItem';

const todoList = (state = [], action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        todoItem(undefined, action),
      ];
    }
    case 'TOGGLE_TODO': {
      return state.map(item => todoItem(item, action));
    }
    default: {
      return state;
    }
  }
};

export default todoList;
