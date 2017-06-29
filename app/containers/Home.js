import React, { Component } from 'react';

import {
  List,
  ListItem,
} from "react-native-elements";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';

import AppContainer from './app/containers/AppContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class Home extends Component {
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

function mapStateToProps(state) {
    return {
        fetchedLessons: state.fetchedLessons,
    };
}
