import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import PropTypes, { oneOfType } from "prop-types";

// Theme
import { Colors } from "../Themes/Theme";
import { H2, H6, ParagraphSmall } from "../Themes/Global";
import styled from "styled-components/native";

import FeatherIcons from "react-native-vector-icons/Feather";

const CardWrapper = styled.View`
  padding-left: 5;
  padding-right: 5;
  align-items: center;
`;
const ContentWrapper = styled.View`
  margin-left: 50;
  padding-left: 10;
  padding-top: 15;
  padding-bottom: 15;
  padding-right: 10;
  align-items: center;
`;
const ContentDescriptionWrapper = styled.View`
  align-items: flex-start;
`;
const ListRoundIcon = styled.View`
  position: absolute;
  top: 21;
  padding: 5px;
`;

class ListCircleIcon extends Component {
  imageSet = () => {
      if (this.props.icon !== "") {
        return (
          <Image
            source={{ uri: this.props.icon }}
            style={{ height: 100, width: 100 }}
          />
          );
    } return (
        <Image
          source={require("../Assets/Profile/images.jpeg")}
          style={{ height: 100, width: 100 }}
        />
      );
  };

  listDescription = () => {
    if (this.props.description) {
      return (
        <H6 style={Styles.description}>
          Email:
          {this.props.description}
        </H6>
      );
    }
  };
  listCompany = () => {
    if (this.props.company) {
      return (
        <H6 style={Styles.description}>
          Company:
          {this.props.company}
        </H6>
      );
    }
  };

  renderFollowers = () => {
    if (this.props.followers) {
      return (
        <H6 style={Styles.description}>
          Followers:
          {this.props.followers}
        </H6>
      );
    }
  };
  renderFollowing = () => {
    if (this.props.following) {
      return (
        <H6 style={Styles.description}>
          Following:
          {this.props.following}
        </H6>
      );
    }
  };

  render() {
    return (
      <CardWrapper>
        <TouchableOpacity style={Styles.button} onPress={this.props.onPress}>
          <ListRoundIcon>{this.imageSet()}</ListRoundIcon>
          <ContentWrapper>
            <ContentDescriptionWrapper>
              <H2 style={Styles.heading}>{this.props.name}</H2>
              {this.listDescription()}
              {this.listCompany()}
              {this.renderFollowers()}
              {this.renderFollowing()}
            </ContentDescriptionWrapper>
          </ContentWrapper>
        </TouchableOpacity>
      </CardWrapper>
    );
  }
}

const Styles = StyleSheet.create({
  button: {
    width: "100%"
  },
  heading: {
    padding: 2.5,
    paddingTop: 21,
    paddingLeft: 35,
    fontWeight: "400"
  },
  description: {
    padding: 2.5,
    marginLeft: 35
  }
});

ListCircleIcon.defaultProps = {
  name: "",
  icon: "",
  description: "",
  iconSet: ""
};

ListCircleIcon.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconSet: PropTypes.string,
  onPress: PropTypes.func,
  followers: PropTypes.number,
  following: PropTypes.number,
  company: PropTypes.string
};

export default ListCircleIcon;
