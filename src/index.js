import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './containers/App';
import getStoreInstance, { history } from './store';
import reducer from './reducers';
import './Stylesheet/index.scss';

const store = getStoreInstance(reducer);

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <App/>
        </ConnectedRouter>
      </Provider>);
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

//For Hot Module Replacement work in development
if(module.hot) {
  module.hot.accept();
}
