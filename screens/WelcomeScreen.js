import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='explore' size={30} color={tintColor} />;
    }
  };
  
  render() {
    return (
      <View>
        <Text>WelcomeScreen</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
