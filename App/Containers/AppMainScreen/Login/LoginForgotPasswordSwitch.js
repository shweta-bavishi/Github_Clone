import React, {Component} from 'react'

// Components
import LoginScreen from './LoginScreen'

class LoginForgotPasswordSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'login'
    }
  }

  onClick = (screenName) => {
   this.setState({screen: screenName})
  }

  render () {
      return <LoginScreen onClick={this.onClick} navigation={this.props.navigation}/>
  }
}

export default LoginForgotPasswordSwitch
