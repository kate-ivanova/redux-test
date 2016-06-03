/* eslint no-unused-vars: "off" */
import React from 'react';
import AddTodoItem from 'containers/AddTodoItem';
import Filters from 'components/Filters';
import VisibleTodoList from 'containers/VisibleTodoList';

const TodoWidget = () => (
  <div style={{
    marginTop: 50,
  }}>
    <h1>Todo list</h1>
    <AddTodoItem/>
    <Filters/>
    <VisibleTodoList/>
  </div>
);

export default TodoWidget;
