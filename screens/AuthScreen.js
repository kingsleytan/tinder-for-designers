import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Sign-in/Out',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='supervisor-account' size={30} color={tintColor} />;
    }
  };

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

export default AuthScreen;
