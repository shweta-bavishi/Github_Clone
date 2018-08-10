import React from 'react'
import { Animated, Text, Easing } from 'react-native'

// A higher order component that fades in a screen. Useful for tabs?
export default function withFade(WrappedComponent, duration) {
  return class extends React.Component {
    state = {
      fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          easing: Easing.ease,
          duration: duration || 400
        }
      ).start() // Starts the animation
    }

    render() {
      const { fadeAnim, verticalAnim } = this.state

      return (
        <Animated.View // Special animatable View
          style={{
            opacity: fadeAnim,
            flex: 1,
            ...this.props.style
          }}
        >
          <WrappedComponent {...this.props} />
        </Animated.View>
      )
    }
  }
}
