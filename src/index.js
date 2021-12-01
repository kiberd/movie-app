import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";


import rootReducer from "./modules/reducers";
import rootSaga from './modules/sagas';




const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
