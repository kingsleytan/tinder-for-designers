import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedShots } from '../actions';

class SettingsScreen extends Component {
  render() {
    return (
      <View>
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
