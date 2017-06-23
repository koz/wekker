import {connect} from 'react-redux'
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {MapView, Location, Permissions} from 'expo'

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
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
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
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#fffefe"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
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
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
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

  async handleDragEnd(event) {
    const {addDestination} = this.props
    const {coordinate: {longitude, latitude}} = event.nativeEvent
    const address = await getFormattedAddress(latitude, longitude)
    address && addDestination(latitude, longitude, address)
  }

  componentWillUnmount() {
    this.watcher.remove()
  }

  render() {
    const {destination} = this.props
    const {initialPosition, lastPosition} = this.state
    const initialCoords = initialPosition ? initialPosition.coords : null
    const lastCoords = lastPosition ? lastPosition.coords : null
    const actualPosition = (lastCoords || initialCoords)
    const {latitude: actualLat, longitude: actualLng} = actualPosition || {}
    const {lat: destinationLat, lng: destinationLng} = destination || {}
    const points = destination ? [actualPosition, {latitude: destinationLat, longitude: destinationLng}] : [actualPosition]
    const {latitude, longitude, latitudeDelta, longitudeDelta} = points[0] ? getRegionContainingPoints(points) : {
      latitude: actualLat || 37.78825,
      longitude: actualLng || -122.4324,
    }

    return (
      <MapView
        provider="google"
        customMapStyle={mapStyle}
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: latitudeDelta * 2 || 0.0043,
          longitudeDelta: longitudeDelta * 2 || 0.0043,
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

const mapStateToProps = ({wekker: {destination}}) => ({destination})
const mapDispatchToProps = dispatch => ({
  addDestination: (lat, lng, address) => dispatch(addDestination(lat, lng, address)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Map)
