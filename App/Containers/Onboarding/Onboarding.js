import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
// Swiper
import Swiper from "react-native-swiper";
// Theme
import { Colors } from "../../Themes/Theme";

import { ScreenWrapper } from "../../Themes/Global";

// Constants
import { ONBOARDING } from "../../Constants/Constants";

// Components
import GradientButton from "../../Components/GradientButton";
import OnboardingScreen from "../../Components/Onboarding";

const ScreenSwiperWrapper = styled.View`
  flex: 0.8;
`;
const ScreenStaticWrapper = styled.View`
  flex: 0.2;
  justify-content: center;
  align-self: center;
`;
const Dot = styled.View`
  width: 6;
  height: 6;
  margin-right: 6;
  margin-left: 6;
  border-radius: 6;
  background-color: ${props =>
    props.active ? Colors.GithubPrimary : Colors.Grey2};
`;
const RightContainer = styled.TouchableOpacity`
  alignItems:flex-end;
  alignSelf:flex-end;
  justifyContent:flex-end;
  paddingRight:30;
  paddingTop: 30;
  flex:0.5
  `;
  const LeftContainer = styled.TouchableOpacity`
  alignItems:flex-start;
  alignSelf:flex-start;
  justifyContent:flex-start;
  paddingLeft:30;
  paddingTop: 30;
  flex:0.5
  `;

const LoginText = styled.Text`
  fontSize: 18;
  color: #969696;
`;

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  _slideChange = index => {
    this.setState({ slideIndex: index });
  };

  _navigate = () => {
    if (this.state.slideIndex !== 3) {
      this.refs.swiper.scrollBy(1);
    } else {
      this.props.navigation.navigate("AppMainScreen");
    }
  };
  _navigateToLogin = data => {
    this.props.navigation.navigate("AppMainScreen");
  };

  _renderSwiper = () => {
    return (
      <ScreenSwiperWrapper>
        <View style={{ flexDirection: "row" }}>
          <LeftContainer />
          <RightContainer
            onPress={() => {
              this._navigateToLogin();
            }}
          >
            <LoginText>Login</LoginText>
          </RightContainer>
        </View>
        <Swiper
          ref="swiper"
          loop={false}
          dot={<Dot />}
          activeDot={<Dot active />}
          onIndexChanged={this._slideChange}
        >
          {ONBOARDING.map((data, index) => {
            return (
              <OnboardingScreen
                key={index}
                index={index}
                name={data.NAME}
                description={data.TEXT}
              />
            );
          })}
        </Swiper>
      </ScreenSwiperWrapper>
    );
  };

  _renderButton = () => {
    return (
      <ScreenStaticWrapper>
        <GradientButton onPress={this._navigate}>
          {ONBOARDING[this.state.slideIndex].BUTTON_NAME}
        </GradientButton>
      </ScreenStaticWrapper>
    );
  };

  render() {
    return (
      <ScreenWrapper>
        {this._renderSwiper()}
        {this._renderButton()}
      </ScreenWrapper>
    );
  }
}
const styles = {
  loginText: {
    fontSize: 18,
    color: "#969696"
  }
};

export default Onboarding;
