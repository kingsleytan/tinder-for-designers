import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Dimensions, Image } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'LIKED Designs',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='favorite-border' size={30} color={tintColor} />;
    },

    headerRight:
      <Button
        title="Clear"
        onPress={() => { navigation.navigate('settings'); }}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
  });

  renderLikedShots() {
  return this.props.likedShots.map(shot => {
    const {
      id, title, images, likes_count, views_count, html_url
    } = shot;

    return (
      <Card title={title} key={id}>
          <View style={{ height: 200 }}>
            <Image
              style={styles.imageStyle}
              source={{ uri: images.normal }}
            />
          <View style={styles.detailWrapper}>
            <Text>{likes_count} likes</Text>
            <Text>{views_count} views</Text>
          </View>
          <Button
            title="Hire Now!"
            backgroundColor="#FF0080"
            onPress={() => Linking.openURL(html_url)}
          />
        </View>
      </Card>
    );
  });
}

  render() {
    return (
      <ScrollView>
        {this.renderLikedShots()}
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle: {
    flex: 1
  },

  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

function mapStateToProps(state) {
  return { likedShots: state.likedShots };
}

export default connect(mapStateToProps)(ReviewScreen);
