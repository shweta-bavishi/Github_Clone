import React, { Component } from "react";
import { TouchableOpacity, Alert, ScrollView } from "react-native";

// Redux
import { connect } from "react-redux";

// Actions
import AuthActions from "../../../Actions/Auth";


// Theme
import styled from "styled-components/native";
import { Colors } from "../../../Themes/Theme";
import {
  ScreenWrapper,
  H5,
  LargeInputSpacer,
  InputSpacer,
  ScreenPadder,
  ParagraphSmall,
  KeyboardAvoidWrapper,
  ScrollWrapper
} from "../../../Themes/Global";

// Components
import InputText from "../../../Components/InputText";
import GradientButton from "../../../Components/GradientButton";
import ThemeButton from "../../../Components/ThemeButton";

import GitUserApi from '../../../services/GitUserApi'

const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 80px;
`;
const Form = styled.View`
  height: 150px;
`;
const SubmitButtonWrapper = styled.View`
  align-self: center;
  justify-content: center;
  height: 80px
`;


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  componentWillMount() {}

  _renderHeader = () => {
    return (
      <Header>
        <H5>Welcome Back!</H5>
      </Header>
    );
  };

  _login = async () => {
    const { userAccounts } = this.props;
    const { email, password } = this.state;
    if (!email) {
      Alert.alert(
        "Error",
        "Email is missing",
        [
          {
            text: "Ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else if (!password) {
      Alert.alert(
        "Error",
        "Password is missing",
        [
          {
            text: "Ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else {
      const json = await GitUserApi.login(email, password)
      if (json === undefined) {
        console.log("Undefined JSON")
      } else if (json.error) {
        console.log("Error")
      } else {
        if(json.message=="Requires authentication"){
          Alert.alert(
            "Error",
            "Please enter your github email id and password",
            [
              {
                text: "Ok",
                onPress: () => this.setState(email:'', password:''),
                style: "cancel"
              }
            ],
            { cancelable: false }
          );
        }
        else{
          this.props.login([{ email: email, password: password }]);
          this.props.navigation.navigate("Tabs");
        }
      }
    }
  };

  _renderForm = () => {
    return (
      <Form>
        <InputSpacer>
          <InputText
            icon={"envelope"}
            autoCorrect={false}
            onChangeText={email => this.setState({ email: email })}
            inputRef={nextInput => (this.email = nextInput)}
            editable
            maxLength={40}
            returnKeyType="next"
            autoCapitalize={"none"}
            value={null}
            placeholder="E-mail ID"
          />
        </InputSpacer>
        <LargeInputSpacer>
          <InputText
            icon={"lock"}
            autoCorrect={false}
            onChangeText={password => this.setState({ password: password })}
            inputRef={nextInput => (this.password = nextInput)}
            editable
            maxLength={40}
            returnKeyType="next"
            value={null}
            autoCapitalize={"none"}
            secureTextEntry
            placeholder="Password"
          />
        </LargeInputSpacer>
        <InputSpacer>
          <SubmitButtonWrapper>
            <GradientButton onPress={this._login}>LOGIN</GradientButton>
          </SubmitButtonWrapper>
        </InputSpacer>
      </Form>
    );
  };

  render() {
    return (
      <KeyboardAvoidWrapper>
        <ScreenPadder>
          {this._renderHeader()}
          {this._renderForm()}
        </ScreenPadder>
      </KeyboardAvoidWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    userAccounts: state.auth.userAccounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: currentUser => dispatch(AuthActions.login(currentUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
