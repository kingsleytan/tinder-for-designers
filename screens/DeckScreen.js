import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

import Swipe from '../components/Swipe';
import * as actions from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Gallery',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='touch-app' size={30} color={tintColor} />;
    }
  };

  renderCard(shot) {
    const { images, title, likes_count, views_count, comments_count } = shot;
    return (
      <Card title={shot.title}>
        <View style={{ height: SCREEN_HEIGHT / 2 }}>
          <Image
            style={styles.imageStyle}
            source={{ uri: images.normal }}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{likes_count} likes</Text>
          <Text>{views_count} views</Text>
          <Text>{comments_count} comments</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Shots">
        <Button
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#FF5EAA"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  onButtonPress = () => {
    this.props.fetchShots(() => {
      this.props.navigation.navigate('deck');
    });
  }


  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <View>
          <Text>{this.props.shots} this.props.shots</Text>
        </View>
        <Button
          title="Show More"
          backgroundColor="#FF5EAA"
          icon={{ name: 'search' }}
          onPress={this.onButtonPress}
        />
      </View>
    );
  }
}

const styles = {

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },

  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

function mapStateToProps({ shots }) {
  return { shots };
}

export default connect(mapStateToProps, actions)(DeckScreen);
