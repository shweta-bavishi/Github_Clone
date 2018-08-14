import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

// Theme
import { Colors } from '../Themes/Theme'
import { H3 } from '../Themes/Global'
import styled from 'styled-components/native'

import Switch from './Switch'

const CardWrapper = styled.View`
  padding-left: 5;
  padding-right: 5;
  align-items: center;
`
const ContentWrapper = styled.View`
  padding-top: 15;
  padding-bottom: 15;
  padding-right: 10;
  align-items: flex-start;
`
const ContentDescriptionWrapper = styled.View`
  align-items: flex-start;
`

class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    };
  }

  onToggle = toggle => {
    this.setState({ value: !this.state.value });
  };

  showSwitch = () => {
    if(this.props.showSwitch){
      return(
        <Switch isOn={this.state.value} onToggle={this.onToggle} size={'8'} />
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <CardWrapper>
          <ContentWrapper>
            <ContentDescriptionWrapper>
              <View style={{flexDirection:'row'}}>
                <H3 style={Styles.heading}>{this.props.name}</H3>
                {this.showSwitch()}
              </View>
            </ContentDescriptionWrapper>
          </ContentWrapper>
      </CardWrapper>
    )
  }
}

const Styles = StyleSheet.create({
  button: {
    width: '100%'
  },
  heading: {
    padding: 2.5,
    paddingLeft: 0,
    fontWeight: '400',
    flex: 1
  },
  description: {
    padding: 2.5,
    paddingLeft: 0
  }
})

SimpleList.defaultProps = {
  name: ''
}

SimpleList.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  showSwitch: PropTypes.string
}

export default SimpleList
