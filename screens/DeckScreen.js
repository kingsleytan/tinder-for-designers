import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Gallery',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='touch-app' size={30} color={tintColor} />;
    }
  };

  render() {
    return (
      <View>
        <Button
          large
          title="Show"
          backgroundColor="#FF5EAA"
          icon={{ name: 'search' }}
          onPress={this.props.fetchShots}
        />
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(DeckScreen);
