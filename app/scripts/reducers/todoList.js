/* eslint no-unused-vars: "off" */
/* eslint no-else-return: "off" */
import todoItem from 'reducers/todoItem';
import {combineReducers} from 'redux';

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state, action.id,
      ];
    }
    default: {
      return state;
    }
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO': {
      return {
        ...state,
        [action.id]: todoItem(state[action.id], action),
      };
    }
    default: {
      return state;
    }
  }
};

const todoList = combineReducers({
  byId,
  allIds,
});

export default todoList;

const getAllTodos = state =>
  state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'completed': {
      return allTodos.filter(t =>
        t.completed
      );
    }
    case 'active': {
      return allTodos.filter(t =>
        !t.completed
      );
    }
    default: {
      return allTodos;
    }
  }
};
