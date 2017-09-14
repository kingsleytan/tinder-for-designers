import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


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
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

export default DeckScreen;
