import React, { Component } from 'react';

import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  List,
  ListItem,
} from "react-native-elements";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';

import { ActionCreators } from '../actions';


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

export class Home extends Component {
  onPressButton() {
    this.props.fetchLessons();
  }

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
      <view>
        <View>
          <TouchableHighlight onPress={() => this.onPressButton()}>
            <Text>Fetch Lessons</Text>
          </TouchableHighlight>
        </View>
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
      </view>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedLessons: state.lesssons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLessons: () => dispatch(ActionCreators.fetchLessons())
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ActionCreators, dispatch);
// }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);