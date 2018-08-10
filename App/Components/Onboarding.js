import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

// Theme
import styled from 'styled-components/native'
import { Colors } from '../Themes/Theme'
import { ScreenWrapper, ParagraphMedium } from '../Themes/Global'

// Images
import { ONBOARDING_SCREENS } from '../Assets'

const CustomSVGWrapper = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
`

const ScreenTitleWrapper = styled.View`
  flex: 0.1
  align-self: center;
  justify-content: center;
`
const ScreenTitle = styled.Text`
  font-weight: 800;
  font-size: 20;
  letter-spacing: 1;
  color: ${Colors.Black};
`

const ScreenContentWrapper = styled.View`
  flex: 0.2
  align-self: center;
  justify-content: center;
`

class OnboardingSlide extends Component {
  render() {
    return (
      <ScreenWrapper style={{ paddingRight: 50, paddingLeft: 50 }}>
        <CustomSVGWrapper>
          <Image
            source={ONBOARDING_SCREENS[this.props.index]}
            resizeMode={'contain'}
            style={{ flex: 1 }}
          />
        </CustomSVGWrapper>
        <ScreenTitleWrapper>
          <ScreenTitle>{this.props.name}</ScreenTitle>
        </ScreenTitleWrapper>
        <ScreenContentWrapper>
          <ParagraphMedium style={{ textAlign: 'center' }}>
            {this.props.description}
          </ParagraphMedium>
        </ScreenContentWrapper>
      </ScreenWrapper>
    )
  }
}

OnboardingSlide.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default OnboardingSlide
