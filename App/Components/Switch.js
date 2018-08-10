import React, { Component } from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'

// Linear Gradient
import LinearGradient from 'react-native-linear-gradient'

// Theme
import { Colors } from '../Themes/Theme'
import styled from 'styled-components/native'

const SwitchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`
const Switch = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${Colors.SwitchBackground}
`
const SwitchIndicator = styled.View`
  margin-top: 1;
  margin-bottom: 1;
  margin-right: 4;
  margin-left: 4;
  position: absolute;
  background-color: ${props =>
    props.isOn ? Colors.Primary : Colors.Background}
  align-items: center;
  justify-content: center;
`
const SwitchText = styled.Text`
  font-size: 17;
  background-color: transparent
  font-weight: 700
`

const AnimatedSwitchIndicator = new Animated.createAnimatedComponent(
  SwitchIndicator
)
class SwitchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: this.props.isOn,
      offsetX: new Animated.Value(0),
      initialDirection: this.props.isOn ? { right: 0 } : { left: 0 }
    }
    this.calculateDimensions(this)
  }

  calculateDimensions = () => {
    let dimensions = {
      width: 100,
      padding: 20,
      cercleWidth: 60,
      cercleHeight: 34,
      translateX: 100
    }
    this.state.dimensions = dimensions
  }

  onToggle = () => {
    let toValue
    if (this.props.isOn) {
      toValue = this.state.isOn ? -30 : 0
    } else {
      toValue = this.state.isOn ? 0 : 0
    }
    Animated.timing(this.state.offsetX, {
      toValue: toValue,
      duration: 300
    }).start()

    let newState = !this.state.isOn

    this.setState({
      ...this.state,
      isOn: newState
    })

    this.props.onToggle(newState)
  }

  render() {
    return (
      <SwitchWrapper>
        <Switch
          style={{
            width: this.state.dimensions.width,
            padding: this.state.dimensions.padding
          }}
          activeOpacity={0.8}
          onPress={this.onToggle}
        >
          <AnimatedSwitchIndicator
            isOn={this.props.isOn}
            style={{
              transform: [{ translateX: this.state.offsetX }],
              ...this.state.initialDirection,
              width: this.state.dimensions.cercleWidth,
              height: this.state.dimensions.cercleHeight,
            }}
          >
            {this.state.isOn ? (
              <LinearGradient
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                locations={[0, 1]}
                colors={[Colors.SrakshaPrimary, Colors.SrakshaPrimary]}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: this.state.dimensions.cercleWidth,
                  height: this.state.dimensions.cercleHeight,
                }}
              >
                <SwitchText style={{ color: Colors.BackgroundText }}>
                  ON
                </SwitchText>
              </LinearGradient>
            ) : (
              <SwitchText style={{ color: Colors.Black }}>OFF</SwitchText>
            )}
          </AnimatedSwitchIndicator>
        </Switch>
      </SwitchWrapper>
    )
  }
}

SwitchScreen.propTypes = {
  isOn: PropTypes.bool.isRequired,
  size: PropTypes.string,
  onToggle: PropTypes.func.isRequired
}

export default SwitchScreen
