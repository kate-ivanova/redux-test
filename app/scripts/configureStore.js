import throttle from 'lodash/throttle';
import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ServerAPI from './ServerAPI';
import todoList from 'reducers/todoList';
import visibilityFilter from 'reducers/visibilityFilter';

const configureStore = () => {
  const api = new ServerAPI();

  const reducers = combineReducers({
    todoList,
    visibilityFilter,
    routing: routerReducer,
  });

  const store = createStore(
    reducers,
    api.getState()
  );
  store.subscribe(throttle(() => {
    api.setState({todoList: store.getState().todoList});
  }, 1000));

  return store;
};

export default configureStore;
