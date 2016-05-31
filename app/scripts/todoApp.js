/* eslint no-unused-vars: "off" */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import todoList from 'component/todoList';
import visibilityFilter from 'component/visibilityFilter';

let nextTodoId = 0;

const todoApp = () => {
  const store = createStore(combineReducers({
    todoList,
    visibilityFilter,
  }));

  class TodoApp extends Component {
    render() {
      return (
        <div style={{
          marginTop: 50,
        }}>
          <h1>Todo list</h1>
          <div>
            <input type="text" ref={ref => {
              this.text = ref;
            }} />
            <button onClick={() => {
              store.dispatch({
                type: 'ADD_TODO',
                id: nextTodoId++,
                text: this.text.value,
              });
              this.text.value = '';
            }} style={{
              marginLeft: 10,
            }}>
              Add todo
            </button>
          </div>
          <ul>
            {this.props.todoList.map(todoItem =>
              <div key={todoItem.id} onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todoItem.id,
                });
              }} style={{
                textDecoration: todoItem.completed ? 'line-through' : 'none',
              }}>
                <input type="checkbox" checked={todoItem.completed}/>
                <label>{todoItem.text}</label>
              </div>
            )}
          </ul>
        </div>
      );
    }
  }

  const render = () => {
    ReactDOM.render(
      <TodoApp todoList={store.getState().todoList}/>,
      document.getElementById('todo-list')
    );
  };

  store.subscribe(render);
  render();
};

export default todoApp;
