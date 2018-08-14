import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import Button from 'apsl-react-native-button'
import LinearGradient from 'react-native-linear-gradient'

// Theme
import { Colors } from '../Themes/Theme'

// Constants
const ButtonText = styled.Text`
  font-size: 16;
  color: white;
  margin-right: 20;
  margin-left: 20;
  letter-spacing: 2;
  font-weight: 900;
`

class GradientButton extends Component {
  render() {
    return (
      <Button
        isLoading={this.props.isLoading}
        style={[Styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <LinearGradient
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          locations={[0, 1]}
          colors={[Colors.GithubPrimary, Colors.GithubSecondary]}
          style={Styles.button}
        >
          <ButtonText>{this.props.children}</ButtonText>
        </LinearGradient>
      </Button>
    )
  }
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Transparent,
    borderWidth: 0,
    borderRadius: 21.66,
    height: 43.33,
    minWidth: 166,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

GradientButton.propTypes = {
  isLoading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default GradientButton
