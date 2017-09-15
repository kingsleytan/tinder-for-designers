import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedShots } from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = {
    header: {
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  render() {
    return (
      <View>
        <Text>Want to start over again?</Text>
        <Button
          title="Reset Liked Shots"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedShots}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedShots })(SettingsScreen);
