import React, { Component } from "react";
// Reducers
import RootReducer from "./index";

// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { connect, Provider } from "react-redux";
// Redux Middlewares
import thunk from "redux-thunk";
import createLogger from "redux-logger";

// Redux Persist
import { persistStore, autoRehydrate } from "redux-persist";

const middleware = [thunk];
export default function configureStore() {
  let store = compose(applyMiddleware(...middleware))(createStore)(RootReducer);
  let persistor = persistStore(store);
  return { persistor, store };
}
