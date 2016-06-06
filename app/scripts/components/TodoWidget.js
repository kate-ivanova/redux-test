/* eslint no-unused-vars: "off" */
import React from 'react';
import AddTodoItem from 'containers/AddTodoItem';
import FiltersWidget from 'components/FiltersWidget';
import VisibleTodoList from 'containers/VisibleTodoList';

const TodoWidget = ({params}) => {
  console.log(params);
  return (
    <div style={{
      marginTop: 50,
    }}>
      <h2>Todo list</h2>
      <AddTodoItem/>
      <FiltersWidget/>
      <VisibleTodoList filter={params.filter || 'all'}/>
    </div>
  );
};

export default TodoWidget;
