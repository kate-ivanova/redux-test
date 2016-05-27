import {createStore} from 'redux';

class App {
  constructor() {
    this.store = createStore(this._counter);
    this._logState();
    this.store.subscribe(() => this._logState());
  }
  _counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  _logState() {
    console.log(`current state: ${this.store.getState()}`);
  }
}

export default App;
