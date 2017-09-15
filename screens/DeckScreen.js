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
      <Card title={title}>
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
      <Card title="Get More Designs!">
        <Button
          title="See LIKED Designs"
          large
          icon={{ name: 'favorite-border' }}
          backgroundColor="#282828"
          onPress={() => this.props.navigation.navigate('review')}
        />
        <Button
          title="Show Designs"
          large
          backgroundColor="#FF5EAA"
          icon={{ name: 'search' }}
          onPress={this.onButtonPress}
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
        <Swipe
          data={this.props.shots}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={shot => this.props.likeShot(shot)}
          keyProp={this.props.shots.id} //from API
        />
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    flex: 1
  },

  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

function mapStateToProps({ shots }) {
  return { shots: shots };
}

export default connect(mapStateToProps, actions)(DeckScreen);
