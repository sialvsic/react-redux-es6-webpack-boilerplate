import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import getStoreInstance from './store';
import reducer from './reducers';
import './Stylesheet/index.scss';

const store = getStoreInstance(reducer);
let history = syncHistoryWithStore(browserHistory, store);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
          </Route>
        </Router>
      </Provider>);
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);



