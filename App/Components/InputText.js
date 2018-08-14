import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

// Themes
import { Colors } from '../Themes/Theme'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  height: 40;
  font-size: 14;
  color: #000;
  border-bottom-width: 0;
  border-bottom-color: #00000000;
  opacity: ${props => (props.editable ? 1 : 0.7)};
`

class LabelInputText extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      focused: false,
      borderBottomColor: '#00000030'
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={[
          styles.container,
          { borderBottomColor: this.state.focused ? '#00000090' : '#00000030' }
        ]}
      >
        <SimpleLineIcons
          style={{ paddingRight: 18 }}
          name={this.props.icon}
          color={this.state.focused ? Colors.GithubPrimary : Colors.Grey2}
          size={20}
        />
        <TextInput
          style={[this.props.style, { flex: 1 }]}
          ref={nextInput => {
            this.props.inputRef && this.props.inputRef(nextInput)
          }}
          underlineColorAndroid="transparent"
          onBlur={() => this.setState({ focused: false })}
          onFocus={() => this.setState({ focused: true })}
          placeholderTextColor={Colors.Paragraph}
          {...this.props}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 40,
    fontSize: 14,
    color: '#000',
    borderBottomWidth: 0,
    borderBottomColor: '#00000000'
  }
})

LabelInputText.propTypes = {
  icon: PropTypes.string,
  inputRef: PropTypes.func.isRequired,
  editable: PropTypes.bool
}

export default LabelInputText
