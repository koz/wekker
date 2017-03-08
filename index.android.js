/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MapProject extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          initialPosition: position,
        })
      },
      (error) => {
        alert(JSON.stringify(error))
      }
    )

    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          lastPosition: position,
        })
      }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const {initialPosition, lastPosition} = this.state
    const initialCoords = initialPosition ? initialPosition.coords : null
    const lastCoords = lastPosition ? lastPosition.coords : null
    const coords = lastCoords || initialCoords
    const {latitude, longitude} = coords || {}
    return (
      <View style={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: latitude || 37.78825,
           longitude: longitude || -122.4324,
           latitudeDelta: 0,
           longitudeDelta: 0,
         }}
       >
       </MapView>
      </View>
    );
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('MapProject', () => MapProject);
