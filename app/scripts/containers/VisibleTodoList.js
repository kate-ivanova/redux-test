/* eslint no-unused-vars: "off" */
import React from 'react';
import {connect} from 'react-redux';
import TodoList from 'components/TodoList';
import {toggleTodo} from 'actions/TodoListActions';

const getVisibleTodos = (todoList, filter) => {
  switch (filter) {
    case 'COMPLETED': {
      return todoList.filter(t =>
        t.completed
      );
    }
    case 'ACTIVE': {
      return todoList.filter(t =>
        !t.completed
      );
    }
    default: {
      return todoList;
    }
  }
};

const mapStateToTodoListProps = state => ({
  todoList: getVisibleTodos(state.todoList, state.visibilityFilter),
});

const mapDispatchToTodoListProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
