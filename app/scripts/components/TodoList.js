/* eslint no-unused-vars: "off" */
import React from 'react';
import TodoItem from 'components/TodoItem';

const TodoList = ({todoList, onTodoClick}) => (
  <ul>
    {todoList.map(todoItem => {
      return (
        <TodoItem
          key={todoItem.id}
          {...todoItem}
          onClick={() => onTodoClick(todoItem.id)}
        >
        </TodoItem>
      );
    })}
  </ul>
);

export default TodoList;
