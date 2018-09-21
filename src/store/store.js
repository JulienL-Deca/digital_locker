import { createStore } from 'redux';
import reducer from './reducer.js';
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const Store = createStore(reducer,
  applyMiddleware(logger)
);


export default Store;
