import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  StyleSheet,
  Input
} from "react-native";

//CommonItems
import { Card, CardSection } from "../../../Common";
import { SearchBar } from "react-native-elements";

import { fetchUserDetails } from "../../../Actions/userDetails";
// Components
import ListCircleIcon from "../../../Components/ListCircleIcon";

import GitUserApi from "../../../services/GitUserApi";

// Theme
import styled from "styled-components/native";
import { Colors } from "../../../Themes/Theme";
import {
  ScreenWrapper,
  H2,
  H5,
  ScreenPadder,
  ParagraphSmall,
  ListWrapper,
  ListItem,
  Paragraph
} from "../../../Themes/Global";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";

const ScreenHeaderNameWrapper = styled.View`
  flex-direction: row
  align-items: center
  justify-content: space-between
  padding-top: 5%;
`;

class DashboardScreen extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUserDetails());
  }

  _renderHeaderName = () => {
    return (
      <ScreenHeaderNameWrapper>
        <H2>Search User</H2>
      </ScreenHeaderNameWrapper>
    );
  };

  _renderSearchBar = () => {
    return (
      <SearchBar
        lightTheme
        placeholder="Search"
        containerStyle={{
          backgroundColor: "white",
          marginTop: 10,
          borderTopColor: "white"
        }}
        inputContainerStyle={{
          backgroundColor: "#c1c1c1"
        }}
      />
    );
  };
  _navigate = data => {
    this.props.navigation.navigate(data, { data: data });
  };

  _renderMainContent = () => {
    const { error, loading, users } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(users);
  };

  render() {
    return (
      <ScrollView>
        <ScreenWrapper style={{ marginTop: 10 }}>
          <ScreenPadder>
            {this._renderHeaderName()}
            {this._renderSearchBar()}
            {this._renderMainContent()}
          </ScreenPadder>
        </ScreenWrapper>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps)(DashboardScreen);

const styles = StyleSheet.create({
  blockStyle: {
    paddingBottom: 50,
    borderBottomWidth: 0,
    width: Dimensions.get("window").width / 2 - 20,
    height: Dimensions.get("window").height / 4,
    padding: 15
  },
  columnStyle: {
    borderBottomWidth: 0
  }
});
