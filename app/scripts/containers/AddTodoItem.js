/* eslint no-unused-vars: "off" */
import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from 'actions/TodoListActions';

let AddTodoItem = ({dispatch}) => {
  let input;
  return (
    <div>
      <input type="text" ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        const text = input.value;
        if (text) {
          dispatch(addTodo(text));
          input.value = '';
        }
      }} style={{
        marginLeft: 10,
      }}>
        Add todo
      </button>
    </div>
  );
};

AddTodoItem = connect()(AddTodoItem);

export default AddTodoItem;
