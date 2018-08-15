import React, { Component } from "react";
import { NavigationActions } from "react-navigation";

import styled from "styled-components/native";

// Assets
import { SPLASH_LOGO } from "../../Assets";

const Logo = styled.Image`
  flex: 1;
`;

export default class LaunchScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this._navigateTo("StartScreen");
    }, 2000);
  }
  _navigateTo = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Onboarding" })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  };
  render() {
    return (
      <Logo
        source={SPLASH_LOGO}
        resizeMode={"contain"}
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
          alignSelf: "center"
        }}
      />
    );
  }
}
