import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from "redux"
import reducer from "./Redux/diaryReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './Redux/combinedSaga'
//import thunk from "redux-thunk"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);
reportWebVitals();
