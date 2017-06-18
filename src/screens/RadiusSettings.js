import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native'
import Slider from 'react-native-slider'

class RadiusSettings extends Component {
  static navigationOptions = {
    title: 'Raio de Alarme',
  }

  constructor(props) {
    super(props)
    this.state = {
      value: 500,
    }
  }

  handleSlide = (value) => {
    this.setState({value})
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          maximumValue={2000}
          minimumValue={500}
          step={100}
          onValueChange={this.handleSlide}
          style={styles.slider}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#d14ba6'
        />
        <Text style={styles.text}>
          {`${this.state.value} m`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: '#ADD8E6',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
    top: 25,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  }
})


export default RadiusSettings
