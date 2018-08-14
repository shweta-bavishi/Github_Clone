import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import PropTypes, { oneOfType } from 'prop-types'


// Theme
import { Colors } from '../Themes/Theme'
import { H5, ParagraphSmall } from '../Themes/Global'
import styled from 'styled-components/native'

//button
import Button from '../Components/Button';

//Icons
import FeatherIcons from 'react-native-vector-icons/Octicons'

const CardWrapper = styled.View`
  padding-left: 5;
  padding-right: 5;
  align-items: center;
`
const ContentWrapper = styled.View`
  padding-top: 15;
  align-items: flex-start;
`
const ContentDescriptionWrapper = styled.View`
  align-items: flex-start;
`

class ListCircleIcon extends Component {

  listDescription = () => {
    if (this.props.description) {
      return (
        <ParagraphSmall style={Styles.description}>
          {this.props.description}
        </ParagraphSmall>
      )
    } else {
      return null
    }
  }


  render() {
    return (
      <CardWrapper>
        <TouchableOpacity style={Styles.button} onPress={this.props.onPress}>
          <ContentWrapper>
            <ContentDescriptionWrapper>
              <View style={Styles.title}>
                <H5 style={Styles.heading}>{this.props.name}</H5>
              </View>
              {this.listDescription()}
            </ContentDescriptionWrapper>
          </ContentWrapper>
        </TouchableOpacity>
      </CardWrapper>
    )
  }
}

const Styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF'
  },
  heading: {
    padding: 2.5,
    paddingLeft: 0,
    fontWeight: '300',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 8,
    fontSize: 16,
    color: Colors.Grey1
  },
  description: {
    padding: 2.5,
    paddingLeft: 0,
    fontSize: 14,
    marginTop: 3,
    fontFamily: 'times'
  },
  title: {
    flexDirection: 'row',
  },

})

ListCircleIcon.defaultProps = {
  name: '',
  icon: '',
  description: '',
  iconSet: ''
}

ListCircleIcon.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: oneOfType([PropTypes.string, PropTypes.number]),
  iconSet: PropTypes.string,
  onPress: PropTypes.func
}

export default ListCircleIcon
