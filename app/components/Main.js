import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import { unauthUser } from '../actions'; 
var Main = React.createClass({

  onLogout: function () {
    this.props.dispatch(unauthUser)
  },
  render(){
    return (
        <View style={styles.container}>
            <Text>
                Welcome to Main.  |  You're logged in.
            </Text>

          <TouchableOpacity onPress={this.onLogout}>
            <Text>
                Logout
            </Text>
          </TouchableOpacity>

        </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = connect()(Main);











//
