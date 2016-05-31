/* eslint no-unused-vars: "off" */
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import counter from 'component/Counter';

const app = () => {
  const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
  const store = createStore(counter);
  const render = () => {
    ReactDOM.render(
      <Counter
        value = {store.getState()}
        onIncrement = {() => {
          store.dispatch({type: 'INCREMENT'});
        }}
        onDecrement = {() => {
          store.dispatch({type: 'DECREMENT'});
        }}
      />,
      document.getElementById('counter')
    );
  };
  store.subscribe(render);
  render();
};

export default app;
