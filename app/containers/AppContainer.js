import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class AppContainer extends Component {

    render() {
        return (
            <view>
                <Text>
                    App container!!!!
              </Text>
            </view>
        );
    }
}

//centrally dispatching action across entire application...
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => ({}), mapDispatchToProps)(AppContainer);