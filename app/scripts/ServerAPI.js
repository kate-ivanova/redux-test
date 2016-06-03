import ServerClient from 'sp-utils-serverclient';

export default class ServerAPI extends ServerClient {
  initialize() {}

  _isServer() {
    // can use stubs
    return false;
  }

  getState() {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }
  setState(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
    }
  }
}
