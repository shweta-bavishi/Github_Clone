import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
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
  align-items: flex-start;
  background: #fcfcff;
  flex: 1
`

const ContentDescriptionWrapper = styled.View`
  align-items: flex-start;
  background: #ffffff;
  justifyContent: flex-start;
  width: 100%;
  flex: 1;
  flexDirection: row;
  paddingBottom: 25px;
`

class ListAlerts extends Component {
  imageSet = () => {
    if (this.props.icon) {
      return (
        <Image
          source={this.props.icon}
          resizeMode={'contain'}
          style={{ flex: 1 }}
        />
      )
    } else {
      return null
    }
  }

  iconSet = () => {
    if (this.props.iconSet) {
      return (
        <View style={Styles.icon}>
        <FeatherIcons name={this.props.iconSet} size={22} color={Colors.SrakshaPrimary}/>
        </View>
      )
    } else {
      return null
    }
  }

  buttonSet = () => {
    if(this.props.buttonSet){
      return(
        <Button onPress={this.props.onPress}>{this.props.buttonSet}</Button>
      )
    } else {
      return null
    }
  }
  listDescription = () => {
    if (this.props.description) {
      return (
        <ParagraphSmall style={Styles.description}>
          {this.props.description}
        </ParagraphSmall>
      )
    }
    else {
      return null
    }
  }

  listTime = () => {
    if (this.props.time) {
      return (
        <ParagraphSmall style={Styles.time}>
          {this.props.time}
        </ParagraphSmall>
      )
    } else {
      return null
    }
  }

  listBlock = () => {
    if(this.props.border){
      return (
        <View style={Styles.emptyBlockWithBorder}>
        </View>
      )
    } else {
      return (
        <View style={Styles.emptyBlockWithoutBorder}>
        </View>
      )
    }
    }


  render() {
    return (
      <CardWrapper>

        <View style={Styles.Heading}>
            <View style={{flex: 0.15}}>
              {this.imageSet()}
            </View>
            <View style={{flex:0.55}}>
              <H5 style={Styles.heading}>{this.props.name}</H5>
            </View>
            <View style={{flex: 0.3}}>
              <TouchableOpacity onPress={this.props.onPress}>
              {this.buttonSet()}
              </TouchableOpacity>
            </View>
        </View>

        <ContentDescriptionWrapper>
            {this.listBlock()}
            {this.listDescription()}
        </ContentDescriptionWrapper>
      </CardWrapper>
    )
  }
}

const Styles = StyleSheet.create({
  Heading: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 20
  },
  icon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flex: 0.4,
    paddingLeft: 10,
    marginBottom: 15
  },
  heading: {
    fontWeight: '300',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8,
    fontSize: 18,
    color: Colors.Grey1
  },
  description: {
    padding: 2.5,
    fontSize: 14,
    marginTop: 3,
    fontFamily: 'times',
    paddingLeft: 20,
    color: Colors.Grey2
  },
  time: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 2.5,
    flex: 2,
    fontSize: 13,
    fontFamily: 'times'
  },
  emptyBlockWithBorder: {
    flex: 0.2,
    height: '100%',
    borderRightWidth: 1,
    borderColor: '#d4d0fd',
  },
  emptyBlockWithoutBorder: {
    flex: 0.25,
    height: '100%',
    paddingRight: 25
  },
})

ListAlerts.defaultProps = {
  name: '',
  icon: '',
  description: '',
  iconSet: ''
}

ListAlerts.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: oneOfType([PropTypes.string, PropTypes.number]),
  iconSet: PropTypes.string,
  onPress: PropTypes.func,
  border: PropTypes.string
}

export default ListAlerts
