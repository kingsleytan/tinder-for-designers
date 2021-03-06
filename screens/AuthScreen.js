import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Sign-in/Out',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='supervisor-account' size={30} color={tintColor} />;
    }
  };

  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
    // AsyncStorage.removeItem('fb_token');
    }

    componentWillReceiveProps(nextProps) {
      this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
      if (props.token) {
        this.props.navigation.navigate('deck');
      }
    }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
