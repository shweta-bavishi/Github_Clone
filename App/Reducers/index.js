import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Nav from "./Nav";
import Auth from "./Auth";
import Users from "./userDetails";

const config = {
  key: "root",
  storage
};

const RootReducer = persistCombineReducers(config, {
  nav: Nav,
  auth: Auth,
  users: Users
});

export default RootReducer;
