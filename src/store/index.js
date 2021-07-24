import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { dogProfileReducer } from "./reducer";
import * as actions from './actions';

const initializeStore = () => createStore(
  dogProfileReducer,
  applyMiddleware(logger)
)

export {
  initializeStore,
  actions
}
