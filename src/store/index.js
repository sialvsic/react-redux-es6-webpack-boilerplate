import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

let storeInstance = null;
const logger = createLogger();

const configureStore = function() {
  storeInstance = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history), thunk, logger)
    )
  );

  return storeInstance;
};

const getStoreInstance = function() {
  return storeInstance ? storeInstance : configureStore();
};

export default getStoreInstance;
