import React from "react";

import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
  DrawerNavigator,
  NavigationActions
} from "react-navigation";

// Theme
import { Colors, width } from "../Themes/Theme";

// Screens
import DashboardScreen from "../Containers/Tabs/Dashboard";
import RepositoryDetail from "../Containers/Tabs/RepositoryDetail";
//import AlertGraphDetail from '../Containers/Tabs/Dashboard/AlertGraph'

// Icons
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DashboardStack = StackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen
    },
    RepositoryDetail: {
      screen: RepositoryDetail
    }
  },
  {
    // Default config for all screens
    mode: "modal",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "#fff"
    }
  }
);

const Tabs = TabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <MaterialCommunityIcons
              name={"account-search"}
              size={30}
              color={tintColor}
            />
          ) : (
            <MaterialCommunityIcons
              name={"account-search"}
              size={30}
              color={tintColor}
            />
          )
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: "none",
    tabBarPosition: "bottom",
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.GithubPrimary,
      inactiveTintColor: Colors.Grey2,
      style: {
        paddingBottom: 3,
        height: 65,
        borderTopWidth: 1,
        elevation: 1,
        borderTopColor: "#00000020"
      }
    }
  }
);

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

DashboardStack.router.getStateForAction = navigateOnce(
  DashboardStack.router.getStateForAction
);
export default Tabs;
