// Connect this file to the redux
import React, { Component } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Colors } from "../Themes/Theme";

// Redux

import ReduxNavigation from "../Navigation/ReduxNavigation";
import configureStore from "../Reducers/CreateStore";

// Persist

const { store, persistor } = configureStore();

class RootContainer extends Component {
  componentWillMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <NotificationsBar
          notifications={notifications}
          clearNotifications={clearNotifications}
        />*/}
        <ReduxNavigation />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GithubPrimary
  }
});

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
