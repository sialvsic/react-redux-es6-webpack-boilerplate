import { combineReducers } from 'redux';
import todos from './todos';
import { connectRouter } from 'connected-react-router';

// const rootReducer = combineReducers({
//   routing: routerReducer,
//   todos,
// });
//
// export default rootReducer;

export default (history) => combineReducers({
  router: connectRouter(history),
  todos,
})
