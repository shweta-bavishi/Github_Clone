import { StackNavigator, NavigationActions } from "react-navigation";

// Tabs
import Tabs from "./TabNavigation";

// Import the Components
import LaunchScreen from "../Containers/LaunchScreen";
import AppMainScreen from "../Containers/AppMainScreen";
import Onboarding from "../Containers/Onboarding";

// Just for the drawer header
const MainNavigator = StackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen
    },
    Onboarding: {
      screen: Onboarding
    },
    AppMainScreen: {
      screen: AppMainScreen
    },
    Tabs: {
      screen: Tabs
    }
  },
  {
    headerMode: "none",
    cardStyle: {
      backgroundColor: "#fff"
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

MainNavigator.router.getStateForAction = navigateOnce(
  MainNavigator.router.getStateForAction
);

export default MainNavigator;
