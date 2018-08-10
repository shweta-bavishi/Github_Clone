import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Button from 'apsl-react-native-button'

// Theme
import { Colors } from '../Themes/Theme'

class ThemeButton extends Component {
  render() {
    return (
      <Button
        isLoading={this.props.isLoading}
        style={[
          Styles.button,
          this.props.style,
          { borderColor: this.props.color }
        ]}
        textStyle={[Styles.text, { color: this.props.color }]}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </Button>
    )
  }
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Transparent,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 18.83,
    height: 38.66,
    width: 111
  },
  text: {
    fontSize: 14,
    color: Colors.Primary,
    fontWeight: 'bold'
  }
})

ThemeButton.propTypes = {
  isLoading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  color: PropTypes.string
}

export default ThemeButton
