/* eslint no-unused-vars: "off" */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import todoList from 'component/todoList';
import visibilityFilter from 'component/visibilityFilter';

let nextTodoId = 0;

const todoApp = () => {
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
  // --------------------- components ----------------------------
  const TodoItem = ({completed, text, onClick}) => {
    return (<div onClick={onClick} style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }}>
      <li>{text}</li>
    </div>);
  };
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
  const AddTodoItem = ({store}) => {
    let input;
    return (
      <div>
        <input type="text" ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          const text = input.value;
          if (text) {
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text,
            });
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

  class VisibleTodoList extends Component {
    componentDidMount() {
      const {store} = this.props;
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate()
      );
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      const props = this.props;
      const {store} = props;
      const state = store.getState();

      return (
        <TodoList
          todoList={
            getVisibleTodos(state.todoList, state.visibilityFilter)
          }
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id,
            })
          }
        />
      );
    }
  }

  class FilterLink extends Component {
    componentDidMount() {
      const {store} = this.props;
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate()
      );
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      const props = this.props;
      const {store} = props;
      const state = store.getState();

      return (
        <Link
          active={
            props.filter === state.visibilityFilter
          }
          onClick={() =>
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter: props.filter,
            })
          }
        >
          {props.children}
        </Link>
      );
    }
  }

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

  const Filters = ({store}) => (
    <div>
      <FilterLink
        store={store}
        filter="ALL"
      >
        ALL
      </FilterLink>
      {' '}
      <FilterLink
        store={store}
        filter="ACTIVE"
      >
        ACTIVE
      </FilterLink>
      {' '}
      <FilterLink
        store={store}
        filter="COMPLETED"
      >
        COMPLETED
      </FilterLink>
    </div>
  );
  // -------------------------------------------------------------

  const TodoApp = ({store}) => (
    <div style={{
      marginTop: 50,
    }}>
      <h1>Todo list</h1>
      <AddTodoItem store={store}/>
      <Filters store={store}/>
      <VisibleTodoList store={store}/>
    </div>
  );

  ReactDOM.render(
    <TodoApp store={createStore(combineReducers({
      todoList,
      visibilityFilter,
    }))}/>,
    document.getElementById('todo-list')
  );
};

export default todoApp;
