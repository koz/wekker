import React, {Component} from 'react'
import Map from './components/Map'

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
