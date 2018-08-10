import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors} from '../Themes/Theme'
export default class Button extends Component{
  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonStyle: {
    backgroundColor: Colors.SrakshaPrimary,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#766ce2',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
};
