import throttle from 'lodash/throttle';
import {createStore, combineReducers} from 'redux';
import ServerAPI from './ServerAPI';
import todoApp from 'reducers/todoApp';
import {routerReducer} from 'react-router-redux';

const configureStore = () => {
  const api = new ServerAPI();
  const store = createStore(
    combineReducers({
      ...todoApp,
      routing: routerReducer,
    }),
    api.getState());

  store.subscribe(throttle(() => {
    api.setState({todoList: store.getState().todoList});
  }, 1000));

  return store;
};

export default configureStore;
