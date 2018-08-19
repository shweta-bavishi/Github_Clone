import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components/native'
import Button from 'apsl-react-native-button'

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
          <ButtonText>{this.props.children}</ButtonText>
      </Button>
    )
  }
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.GithubPrimary,
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
