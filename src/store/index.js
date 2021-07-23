import { createStore } from "redux";
import { dogProfileReducer } from "./reducer";

const store = createStore(dogProfileReducer)

export default store;
