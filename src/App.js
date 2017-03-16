import React, {Component} from 'react'
import Map from './components/Map'
import PlacesAutocomplete from './components/PlacesAutocomplete'

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.setDestination = this.setDestination.bind(this)
  }

  setDestination(lat, lng) {
    this.setState({
      destination: {
        latitude: lat,
        longitude: lng,
      },
    })
  }

  render() {
    const {destination} = this.state
    return (
      <View style={styles.container}>
        <PlacesAutocomplete
          onDestinationSelect={this.setDestination}
        />
        <Map
          destination={destination}
        />
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
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})
