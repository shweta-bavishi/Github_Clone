// Redux
import { createStore, applyMiddleware, compose } from "redux";
// Redux Middlewares
import thunk from "redux-thunk";

// Redux Persist
import { persistStore } from "redux-persist";
// Reducers
import RootReducer from "./index";

const middleware = [thunk];
export default function configureStore() {
  const store = compose(applyMiddleware(...middleware))(createStore)(
    RootReducer
  );
  const persistor = persistStore(store);
  return { persistor, store };
}
