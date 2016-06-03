/* eslint no-unused-expressions: 0 */
import deepFreeze from 'deep-freeze';
import todoList from '../TodoList';

describe('todoList test', () => {
  it('adds item to todoList', () => {
    const stateBefore = [];

    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux',
    };

    const stateAfter = [{
      id: 0,
      text: 'Learn Redux',
      completed: false,
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todoList(stateBefore, action)).to.be.eql(stateAfter);
  });
  it('completes item in todoList (length = 3)', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false,
      },
      {
        id: 1,
        text: 'Make tests',
        completed: false,
      },
      {
        id: 2,
        text: 'Write task',
        completed: false,
      },
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 0,
    };

    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: true,
      },
      {
        id: 1,
        text: 'Make tests',
        completed: false,
      },
      {
        id: 2,
        text: 'Write task',
        completed: false,
      },
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todoList(stateBefore, action)).to.be.eql(stateAfter);
  });
});
