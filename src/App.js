import React, {Component} from 'react'
import Map from './components/Map'
import PlacesAutocomplete from './components/PlacesAutocomplete'

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlacesAutocomplete />
        <Map />
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
