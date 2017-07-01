import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';


class AppContainer extends Component {

    render() {
        return <Home {...this.props} />
    }
}

//centrally dispatching action across entire application...
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state => ({}), mapDispatchToProps)(AppContainer);