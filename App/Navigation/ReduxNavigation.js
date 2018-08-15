import React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import AppNavigation from "./AppNavigation";
// for react-navigation 1.0.0-beta.30
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const addListener = createReduxBoundAddListener("root");
// end for react-navigation 1.0.0-beta.30
// here is our redux-aware our smart component
function ReduxNavigation(props) {
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener // <-- add this as well
  });

  return <AppNavigation navigation={navigation} />;
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
