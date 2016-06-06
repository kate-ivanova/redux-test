/* eslint no-unused-vars: "off" */
import React from 'react';
import {connect} from 'react-redux';
import TodoList from 'components/TodoList';
import {toggleTodo} from 'actions/TodoListActions';
import {getVisibleTodos} from 'reducers/todoApp';

const mapStateToTodoListProps = (state, {params}) => ({
  todoList: getVisibleTodos(state, params.filter),
});

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  {onTodoClick: toggleTodo}
)(TodoList);

export default VisibleTodoList;
