import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { Lesson } from './app/components/lesson';

export default class LessonList  extends Component {
  lesssons = [
    {
      name: 'foo',
      label: 'foo',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    },
    {
      name: 'blah',
      label: 'blah',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    },
    {
      name: 'ta',
      label: 'ta',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    },
    {
      name: 'mu',
      label: 'mu',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    },
  ];
  render() {
    return (
      <View style={{flex: 1}}>
       <Text>Select Your Lesson</Text>
       {
         this.lesssons.map(lesson => <Lesson name={lesson.name} uri={lesson.uri}/>)
       }
      </View>
    );
  }
}

AppRegistry.registerComponent('learnchinese', () => LessonList);
