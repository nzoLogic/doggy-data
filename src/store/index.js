import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { dogProfileReducer } from "./reducer";
import * as actions from './actions';
import * as selectors from './selectors';
import { storageMiddleware } from "./middleware";

const reducers = combineReducers({
  dogProfile: dogProfileReducer
});

const initializeStore = () => createStore(
  reducers,
  applyMiddleware(
    storageMiddleware,
    logger,
  )
);

export {
  actions,
  initializeStore,
  selectors,
};
