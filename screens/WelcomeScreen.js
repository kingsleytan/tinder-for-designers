import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Tinder for Designers App, swipe for your favourite designs!', color: '#fdd2d6' },
  { text: 'Use this to get desired designers', color: '#f683b6' },
  { text: 'Set your location, then swipe away', color: '#282828' }
];

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='explore' size={30} color={tintColor} />;
    }
  };

  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

export default WelcomeScreen;
