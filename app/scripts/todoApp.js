/* eslint no-unused-vars: "off" */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import todoList from 'component/todoList';
import visibilityFilter from 'component/visibilityFilter';

const app = () => {
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
  // --------------------- actions ----------------------------
  const setVisibilityFilter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
  };
  let nextTodoId = 0;
  const addTodo = text => {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text,
    };
  };
  const toggleTodo = id => {
    return {
      type: 'TOGGLE_TODO',
      id,
    };
  };
  // -------------------------------------------------------------
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

  const mapStateToTodoListProps = state => {
    return {
      todoList: getVisibleTodos(state.todoList, state.visibilityFilter),
    };
  };

  const mapDispatchToTodoListProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(toggleTodo(id));
      },
    };
  };

  const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
  )(TodoList);

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

  const mapStateToLinkProps = (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter,
    };
  };

  const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
      },
    };
  };

  const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
  )(Link);

  const Filters = () => (
    <div>
      <FilterLink
        filter="ALL"
      >
        ALL
      </FilterLink>
      {' '}
      <FilterLink
        filter="ACTIVE"
      >
        ACTIVE
      </FilterLink>
      {' '}
      <FilterLink
        filter="COMPLETED"
      >
        COMPLETED
      </FilterLink>
    </div>
  );
  // -------------------------------------------------------------

  const TodoApp = () => (
    <div style={{
      marginTop: 50,
    }}>
      <h1>Todo list</h1>
      <AddTodoItem/>
      <Filters/>
      <VisibleTodoList/>
    </div>
  );

  const todoApp = combineReducers({
    todoList,
    visibilityFilter,
  });

  ReactDOM.render(
    <Provider store={createStore(todoApp)}
    >
      <TodoApp />
    </Provider>,
    document.getElementById('todo-list')
  );
};

export default app;
