import React, {Component} from 'react'
import Slider from 'react-native-slider'
import Button from '../components/Button'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

class RadiusSettings extends Component {
  static navigationOptions = {
    title: 'Raio de Alarme',
  }

  constructor (props) {
    super(props)
    this.state = {
      value: 500,
    }
  }

  handleSlide = (value) => {
    this.setState({value})
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/radar.png')}
        />
        <View style={styles.sliderWrapper}>
          <Slider
            value={this.state.value}
            maximumValue={2000}
            minimumValue={500}
            step={100}
            onValueChange={this.handleSlide}
            style={styles.slider}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor='#9986FC'
          />
          <Text style={styles.text}>
            {`${this.state.value} m`}
          </Text>
        </View>
        <Button onPress={() => {}}>
          Confirmar
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    paddingTop: 72,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 34,
  },
  sliderWrapper: {
    flex: 1,
  },
  slider: {
    marginBottom: 36,
  },
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: '#E3EAFA',
  },
  thumb: {
    width: 40,
    height: 40,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: '#9986FC',
  },
  text: {
    fontSize: 26,
    alignSelf: 'center',
  },
})


export default RadiusSettings
