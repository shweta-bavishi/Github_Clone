import React, { Component } from "react";
import { Image, ScrollView, View, Dimensions } from "react-native";
import { TabViewAnimated, TabBar } from "react-native-tab-view";
import LinearGradient from "react-native-linear-gradient";

// Theme
import styled from "styled-components/native";
// Image
import { LOGO } from "../../Assets/index";

import { ScreenWrapper } from "../../Themes/Global";
import { Colors } from "../../Themes/Theme";

// Components
import LoginScreen from "./Login";

// Constants
const LogoWrapper = styled.View`
  flex: 1
  align-self: center;
  justify-content: center;
`;

const TabsWrapper = styled.View`
  flex: 0.8;
  justify-content: center;
`;

class AppMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [{ key: "login", title: "Login" }]
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      indicatorStyle={{ backgroundColor: Colors.GithubPrimary }}
      labelStyle={{ fontSize: 14, color: Colors.Black, fontWeight: "500" }}
      style={{ backgroundColor: Colors.Background }}
      {...props}
    />
  );

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "login":
        return <LoginScreen navigation={this.props.navigation} />;
      default:
        return null;
    }
  };

  _renderLogo = () => (
    <LogoWrapper>
      <Image source={LOGO} style={{ flex: 1 }} resizeMode={"contain"} />
    </LogoWrapper>
  );

  _renderTabs = () => (
    <TabsWrapper>
      <TabViewAnimated
        style={{ flex: 1.0, borderRadius: 5 }}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    </TabsWrapper>
  );

  render() {
    return (
      <ScreenWrapper style={{ height: 600 }}>
        <LinearGradient
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          locations={[0, 1]}
          colors={[Colors.White, Colors.Background]}
          style={{ flex: 1 }}
        >
          <ScrollView>
            <View style={{ height: 160, justifyContent: "flex-end" }}>
              {this._renderLogo()}
            </View>
            <View style={styles.containerStyle}>{this._renderTabs()}</View>
          </ScrollView>
        </LinearGradient>
      </ScreenWrapper>
    );
  }
}

const styles = {
  containerStyle: {
    height:
      Dimensions.get("window").height - Dimensions.get("window").height / 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: 30,
    marginRight: 30
  }
};

export default AppMainScreen;
