/* eslint no-unused-vars: "off" */
import deepFreeze from 'deep-freeze';
import todoItem from 'component/TodoList/TodoItem';

describe('todoList test', () => {
  it('toggles todoItem', () => {
    const stateBefore = {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    };

    const action = {type: 'TOGGLE_TODO', id: 0};

    const stateAfter = {
      id: 0,
      text: 'Learn Redux',
      completed: true,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todoItem(stateBefore, action)).to.be.eql(stateAfter);
  });
});
