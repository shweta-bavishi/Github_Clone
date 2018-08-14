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
import { Icon } from 'react-native-elements';
//CommonItems
import { Card, CardSection } from '../../../Common';

// Components

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
  padding-top: 30;
`;
const LeftContainer = styled.TouchableOpacity`
alignItems:flex-start;
alignSelf:flex-start;
justifyContent:flex-start;
`

class DashboardScreen extends Component {

  _navigate = data => {
      this.props.navigation.navigate('AlertGraphDetail');
  };
  _renderHeaderName = () => {
    return (
      <LeftContainer onPress={() => this.props.navigation.goBack()}>
        <Icon
        type='ionicon'
        name='ios-arrow-round-back'
        color='#969696'
        size={30}
        />
      </LeftContainer>
    );
  };


  _renderBlocks = () => {
    return(
      <View>
        <CardSection style={styles.columnStyle}>
          <Card>
            <CardSection style={styles.blockStyle}>

            </CardSection>
          </Card>
          <Card>
            <CardSection style={styles.blockStyle}>

            </CardSection>
          </Card>
        </CardSection>

        <CardSection style={styles.columnStyle}>
          <Card>
            <CardSection style={styles.blockStyle}>

            </CardSection>
          </Card>
          <Card>
            <CardSection style={styles.blockStyle}>

            </CardSection>
          </Card>
        </CardSection>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <ScreenWrapper style={{marginTop:10}}>
          <ScreenPadder>
            {this._renderHeaderName()}
            {this._renderBlocks()}
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
