/* eslint no-unused-vars: "off" */
import React from 'react';

const TodoItem = ({completed, text, onClick}) => (
  <div onClick={onClick} style={{
    textDecoration: completed ? 'line-through' : 'none',
    cursor: 'pointer',
  }}>
    <li>{text}</li>
  </div>
);

export default TodoItem;
