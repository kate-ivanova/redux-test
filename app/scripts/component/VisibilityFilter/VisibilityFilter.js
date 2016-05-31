/* eslint no-unused-vars: "off" */
import template from './VisibilityFilter.jade';
import './VisibilityFilter.css';

const visibilityFilter = (state = 'ALL', action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
