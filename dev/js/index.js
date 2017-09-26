import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import allReducers from './reducers';
import App from './components/app';
import createLogger from 'redux-logger';

const logger = createLogger()
const store = createStore(allReducers,
applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
