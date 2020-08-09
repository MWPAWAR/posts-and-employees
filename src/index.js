import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import LocaleProvider from './i18n';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Main = () => (
  <LocaleProvider>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </LocaleProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
