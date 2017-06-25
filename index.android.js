import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  List,
  ListItem,
} from "react-native-elements";


export default class LessonList extends Component {
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

  renderSeparator = () =>
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
      }}
    />;

  render() {
    return (
      <List>
        <FlatList
          data={this.lesssons}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={() => <Text>Select Lesson</Text>}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.name}
              subtitle={item.label}
              avatar={{ uri: item.uri }}
            />
          )}
        />
      </List>
    );
  }
}

AppRegistry.registerComponent('learnchinese', () => LessonList);
