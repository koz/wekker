import React, { Component } from 'react'
import {
  View,
  Slider,
  Text,
  StyleSheet,
  Button,
} from 'react-native'

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
          maximumValue={2000}
          minimumValue={500}
          step={100}
          onValueChange={this.handleSlide}
          style={styles.slider}
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
  },
  slider: {
    marginBottom: 20,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  }
})


export default RadiusSettings
