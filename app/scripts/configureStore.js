import throttle from 'lodash/throttle';
import {createStore} from 'redux';
import ServerAPI from './ServerAPI';
import todoApp from 'reducers/todoApp';

const configureStore = () => {
  const api = new ServerAPI();
  const store = createStore(todoApp, api.getState());

  store.subscribe(throttle(() => {
    api.setState({todoList: store.getState().todoList});
  }, 1000));

  return store;
};

export default configureStore;
