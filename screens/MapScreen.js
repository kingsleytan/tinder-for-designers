import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='pin-drop' size={30} color={tintColor} />;
    }
  };

  render() {
    return (
      <View>
        <Text>MapScreen</Text>
      </View>
    );
  }
}

export default MapScreen;
