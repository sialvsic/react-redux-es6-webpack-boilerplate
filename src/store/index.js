import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

let storeInstance = null;
const logger = createLogger();

const configureStore = function () {
  storeInstance = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk, logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

  return storeInstance;
};

const getStoreInstance = function () {
  return storeInstance ? storeInstance : configureStore();
};

export default getStoreInstance;

