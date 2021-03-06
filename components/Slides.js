import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View>
          <Button
            title="Dribbble your Designers!"
            raised
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
          <Text style={styles.captionStyle}>
            Dribbble is where designers get inspired and hired.
          </Text>
        </View>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textShadowColor: '#A9A9A9',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  captionStyle: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10
  },
  buttonStyle: {
    backgroundColor: '#f683b6',
    marginTop: 15
  }
};

export default Slides;
