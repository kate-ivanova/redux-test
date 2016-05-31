/* eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from 'component/Counter';

const app = () => {
  const store = createStore(counter);

  const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );

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
