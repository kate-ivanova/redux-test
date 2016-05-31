/* eslint no-unused-expressions: 0 */

import counter from 'component/Counter';

describe('CounterModel test', () => {
  it('creates store with initial state', () => {
    expect(counter()).to.be.eql(0);
  });
  it('increments 0 to 1', () => {
    expect(counter(0, {type: 'INCREMENT'})).to.be.eql(1);
  });
  it('increments 1 to 2', () => {
    expect(counter(1, {type: 'INCREMENT'})).to.be.eql(2);
  });
  it('decrements 1 to 0', () => {
    expect(counter(1, {type: 'DECREMENT'})).to.be.eql(0);
  });
  it('decrements 0 to -1', () => {
    expect(counter(0, {type: 'DECREMENT'})).to.be.eql(-1);
  });
  it('dont change state on unknown action', () => {
    expect(counter(1, {type: 'UNKNOWN'})).to.be.eql(1);
  });
});
