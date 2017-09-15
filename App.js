import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './store';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      deck: { screen: DeckScreen },
      map: { screen: MapScreen },
      review: {
        screen: StackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen },
          auth: { screen: AuthScreen }
        })
      },
    }, {
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false,
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
