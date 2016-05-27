/* eslint no-unused-expressions: 0 */

import App from '../app';

describe('CounterModel test', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });
  it('creates store with initial state', () => {
    expect(app.store.getState()).to.be.eql(0);
  });
  it('increments 0 to 1', () => {
    app.store.dispatch({type: 'INCREMENT'});
    expect(app.store.getState()).to.be.eql(1);
  });
  it('increments 1 to 2', () => {
    app.store.dispatch({type: 'INCREMENT'});
    app.store.dispatch({type: 'INCREMENT'});
    expect(app.store.getState()).to.be.eql(2);
  });
  it('decrements 1 to 0', () => {
    app.store.dispatch({type: 'INCREMENT'});
    app.store.dispatch({type: 'DECREMENT'});
    expect(app.store.getState()).to.be.eql(0);
  });
  it('decrements 0 to -1', () => {
    app.store.dispatch({type: 'DECREMENT'});
    expect(app.store.getState()).to.be.eql(-1);
  });
  it('dont change state on unknown action', () => {
    app.store.dispatch({type: 'UNKNOWN'});
    expect(app.store.getState()).to.be.eql(0);
  });
});
