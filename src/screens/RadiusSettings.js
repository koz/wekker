import {connect} from 'react-redux'
import React, {Component} from 'react'
import Slider from 'react-native-slider'
import {View, Text, Image, StyleSheet} from 'react-native'

import Button from '../components/Button'
import {setRadius} from '../redux/actions'
import Spinner from '../components/Spinner'

class RadiusSettings extends Component {
  static navigationOptions = {
    title: 'Raio de Alarme',
  }

  constructor (props) {
    super(props)
    this.state = {radius: props.radius}
  }

  handleSlide = (radius) => {
    this.setState({radius})
  }

  handlePress = () => {
    const {navigation: {goBack}, setRadius} = this.props
    setRadius(this.state.radius)
    goBack()
  }

  render () {
    const {radius} = this.state
    return (
      <View style={styles.container}>
        <Spinner
          style={styles.image}
          source={require('../assets/radar.png')}
        />
        <View style={styles.sliderWrapper}>
          <Slider
            value={radius}
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
            {radius} m
          </Text>
        </View>
        <Button onPress={this.handlePress}>
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
    paddingTop: 48,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 36,
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
    width: 28,
    height: 28,
    bottom: 6,
    borderRadius: 14,
    backgroundColor: '#9986FC',
  },
  text: {
    fontSize: 22,
    alignSelf: 'center',
  },
})

const mapStateToProps = ({wekker: {settings: {radius}}}) => ({radius})
const mapDispatchToProps = dispatch => ({setRadius: radius => dispatch(setRadius(radius))})

export default connect(mapStateToProps, mapDispatchToProps)(RadiusSettings)
