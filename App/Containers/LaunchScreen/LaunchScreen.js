import React, {Component} from 'react'
//import { LinearGradient } from 'react-native-linear-gradient'
import {NavigationActions} from 'react-navigation'

import styled from 'styled-components/native'
import {Colors} from '../../Themes/Theme'

// Assets
import {SPLASH_LOGO} from '../../Assets'

const Logo = styled.Image`
  flex: 1
`

export default class LaunchScreen extends Component {

  _navigateTo = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Onboarding' })],
    });
    this.props.navigation.dispatch(actionToDispatch);
  }

  componentDidMount () {
    setTimeout( () => {
      this._navigateTo('StartScreen')
    },2000);
  }

  render () {
    return (
        <Logo source={SPLASH_LOGO} resizeMode={'contain'} style={{alignItems: 'center', flex: 1, justifyContent: 'center', alignSelf: 'center'}} />
    )
  }
}
