import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(function () {
//     console.log(store.getState());
// })
export default store;
