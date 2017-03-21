import React, {Component} from 'react'
import MapView from 'react-native-maps'

import {StyleSheet} from 'react-native'

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDragEnd = this.handleDragEnd.bind(this)
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

  handleDragEnd(event) {
    const {onDestinationSelect} = this.props
    const {coordinate: {longitude, latitude}} = event.nativeEvent
    onDestinationSelect(latitude, longitude)
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    const {destination} = this.props
    const {initialPosition, lastPosition} = this.state
    const initialCoords = initialPosition ? initialPosition.coords : null
    const lastCoords = lastPosition ? lastPosition.coords : null
    const address = destination || (lastCoords || initialCoords)
    const {latitude, longitude} = address || {}
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: latitude || 37.78825,
          longitude: longitude || -122.4324,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
      >
        {
          address
          ? (
            <MapView.Marker
            draggable
            coordinate={{...address}}
            onDragEnd	={this.handleDragEnd}
            />
          )
          : null
        }
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
   ...StyleSheet.absoluteFillObject,
  },
})
