import React, { Component } from "react";
import {
  ScrollView,
  ActivityIndicator
} from "react-native";

import { SearchBar } from "react-native-elements";
import { throttle } from "throttle-debounce";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { fetchUserDetails } from "../../../Actions/userDetails";
// Components
import ListCircleIcon from "../../../Components/ListCircleIcon";

// Theme

import { ScreenWrapper, H2, ScreenPadder } from "../../../Themes/Global";

const ScreenHeaderNameWrapper = styled.View`
  flex-direction: row
  align-items: center
  justify-content: space-between
  padding-top: 5%;
`;

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.autocompleteSearchThrottled = throttle(5000, this.autocompleteSearch);
  }
  componentWillUpdate() {
    const _searches = this.state._searches || [];
    const temp = _searches.splice(-1);
    if (temp.length !== 0 && temp[0].length !== 1) {
      this.props.dispatch(fetchUserDetails(temp[0]));
    }
  }

  onChange = text => {
    this.setState(text, () => {
      this.autocompleteSearchThrottled(this.state.text);
    });
  };
  autocompleteSearch = text => {
    this._fetch(text);
  };
  _fetch = text => {
    const _searches = this.state._searches || [];
    _searches.push(text);
    this.setState({ _searches });
  };
  renderHeaderName = () => (
    <ScreenHeaderNameWrapper>
      <H2>Search User</H2>
    </ScreenHeaderNameWrapper>
  );
  renderSearchBar = () => (
    <SearchBar
      lightTheme
      placeholder="Search"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={text => this.onChange({ text })}
      cancelIcon={{ type: "font-awesome", name: "chevron-left" }}
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

  renderMainContent = () => {
    const { loading, users } = this.props;

    if (loading) {
      return <ActivityIndicator />;
    }
    return (
      <ListCircleIcon
        icon={users.users.avatar_url == null ? "" : users.users.avatar_url}
        name={users.users.name}
        description={users.users.email == null ? "NA" : users.users.email}
        company={users.users.company == null ? "NA" : users.users.company}
        followers={users.users.followers == null ? "0" : users.users.followers}
        following={users.users.following == null ? "0" : users.users.following}
      />
    );
  };

  render() {
    return (
      <ScrollView>
        <ScreenWrapper style={{ marginTop: 10 }}>
          <ScreenPadder>
            {this.renderHeaderName()}
            {this.renderSearchBar()}
            {this.renderMainContent()}
          </ScreenPadder>
        </ScreenWrapper>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps)(DashboardScreen);
