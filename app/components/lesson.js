import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

export default class Lesson extends Component {
  render() {
    const { uri, name } = this.props;
    return (
      <View style={{alignItems: 'center'}}>
      <Text>Lesson {name}!</Text>
      <Image source={{uri}} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}