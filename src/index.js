import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './Redux/rootReducer';
import thunk from "redux-thunk";//for doing async work

let myStore=createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={myStore}>
  <App />
  </Provider>,
   
    document.getElementById('root')
  
);


