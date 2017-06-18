import React, {Component} from 'react'
import {MapView, Location, Permissions} from 'expo'

import {StyleSheet} from 'react-native'

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDragEnd = this.handleDragEnd.bind(this)
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return null
    }

    return Location.getCurrentPositionAsync({});
  }

  async componentWillMount() {
    const initialPosition = await this.getLocationAsync()
    if (initialPosition) {
      this.setState({initialPosition})
    } else {
      this.setState({
        error: 'Permission not granted'
      })
    }

    this.watcher = await Location.watchPositionAsync({}, (position) => {
      this.setState({
        lastPosition: position,
      })
    })
  }

  handleDragEnd(event) {
    const {onDestinationSelect} = this.props
    const {coordinate: {longitude, latitude}} = event.nativeEvent
    onDestinationSelect(latitude, longitude)
  }

  componentWillUnmount() {
    this.watcher.remove()
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
