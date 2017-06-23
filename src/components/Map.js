import {connect} from 'react-redux'
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {MapView} from 'expo'

import {addDestination} from '../redux/actions'
import {getFormattedAddress} from '../utils/fetcher'
import {getRegionContainingPoints} from '../utils/mapUtils'

const mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDragEnd = this.handleDragEnd.bind(this)
  }

  async handleDragEnd(event) {
    const {addDestination} = this.props
    const {coordinate: {longitude, latitude}} = event.nativeEvent
    const address = await getFormattedAddress(latitude, longitude)
    address && addDestination(latitude, longitude, address)
  }

  render() {
    const {destination, currentPosition} = this.props
    const {lat: actualLat, lng: actualLng} = currentPosition || {}
    const {lat: destinationLat, lng: destinationLng} = destination || {}
    const points = destination ? [currentPosition, {lat: destinationLat, lng: destinationLng}] : [currentPosition]
    const {lat, lng, latDelta, lngDelta} = points[0] ? getRegionContainingPoints(points) : {
      latitude: actualLat || 37.78825,
      longitude: actualLng || -122.4324,
    }

    return (
      <MapView
        provider="google"
        customMapStyle={mapStyle}
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta * 2 || 0.0043,
          longitudeDelta: lngDelta * 2 || 0.0043,
        }}
      >
        {
          actualLat
          && actualLng
          && (
            <MapView.Marker
              image={require('../assets/person.png')}
              coordinate={{
                latitude: actualLat,
                longitude: actualLng,
              }}
            />
          )
        }
        {
          destinationLat
          && destinationLng
          && (
            <MapView.Marker
              draggable
              image={require('../assets/pin.png')}
              coordinate={{
                latitude: destinationLat,
                longitude: destinationLng,
              }}
              onDragEnd = {this.handleDragEnd}
            />
          )
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

const mapStateToProps = ({wekker: {destination, currentPosition}}) => ({destination, currentPosition})
const mapDispatchToProps = dispatch => ({
  addDestination: (lat, lng, address) => dispatch(addDestination(lat, lng, address)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Map)
