/* eslint no-unused-vars: "off" */
import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from 'actions/TodoListActions';

const Link = ({
  active,
  children,
  onClick,
}) => {
  if (active) {
    return (
      <span>{children}</span>
    );
  }
  return (
    <a href="#" onClick={e => {
      e.preventDefault();
      onClick();
    }} >
      {children}
    </a>
  );
};

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLink;
