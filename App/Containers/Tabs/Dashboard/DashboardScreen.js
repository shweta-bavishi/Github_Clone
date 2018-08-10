import React, { Component } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  Modal,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";


//CommonItems
import { Card, CardSection } from '../../../Common';

// Components
import ListCircleIcon from "../../../Components/ListCircleIcon";

import GitUserApi from '../../../services/GitUserApi'

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

const ScreenHeaderNameWrapper = styled.View`
  flex-direction: row
  align-items: center
  justify-content: space-between
  padding-top: 5%;
`;

const NOTIFICATION = [
{
NAME: "100-days-Of-ML-Code",
DESCRIPTION: "100 days of ML Coding",
},
{
NAME: "100-days-Of-ML-Code",
DESCRIPTION: "100 days of ML Coding",
},
{
NAME: "100-days-Of-ML-Code",
DESCRIPTION: "100 days of ML Coding",
},
{
NAME: "100-days-Of-ML-Code",
DESCRIPTION: "100 days of ML Coding",
},
{
NAME: "100-days-Of-ML-Code",
DESCRIPTION: "100 days of ML Coding",
}
];

class DashboardScreen extends Component {

  componentDidMount() {
    const repoList = GitUserApi.getTrendingRepository()
    if (repoList === undefined) {
      console.log("Undefined JSON")
    } else if (json.error) {
      console.log("Error")
    } else {
      console.log(repoList)
    }
  }

  _renderHeaderName = () => {
    return (
      <ScreenHeaderNameWrapper>
        <H2>Repositories</H2>
      </ScreenHeaderNameWrapper>
    );
  };

  _navigate = data => {
    this.props.navigation.navigate(data, { data: data });
  };

  render() {
    return (
      <ScrollView>
        <ScreenWrapper style={{marginTop:10}}>
          <ScreenPadder>
            {this._renderHeaderName()}
            {NOTIFICATION.map((data, index) => {
              return (
                <ListCircleIcon
                  key={index}
                  name={data.NAME}
                  description={data.DESCRIPTION}
                  onPress={() => {
                    this._navigate("RepositoryDetail");
                  }}
                />
              );
            })}
          </ScreenPadder>
        </ScreenWrapper>
      </ScrollView>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  blockStyle:{
    paddingBottom: 50,
    borderBottomWidth: 0,
    width:(Dimensions.get('window').width/2)-20,
    height:Dimensions.get('window').height/4,
    padding:15
  },
  columnStyle:{
    borderBottomWidth: 0,
  }
});
