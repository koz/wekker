import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import PickAddress from './PickAddress'
import RNGooglePlaces from 'react-native-google-places'

class PlacesAutocomplete extends Component {
  constructor(props) {
    super(props)
    this.openSearchModal = this.openSearchModal.bind(this)
    this.handleOriginPress = this.handleOriginPress.bind(this)
    this.handleDestinationPress = this.handleDestinationPress.bind(this)
    this.state = {}
  }

  openSearchModal() {
    return RNGooglePlaces.openAutocompleteModal({
      country: 'BR'
    })
    .catch(error => alert(error.message))
  }

  handleOriginPress() {
    this.openSearchModal()
    .then((place) => {
      const {address, latitude, longitude} = place
      this.setState({
        origin: {
          address,
          latitude,
          longitude,
        },
      })
    })
  }

  handleDestinationPress() {
    this.openSearchModal()
    .then((place) => {
      const {address, latitude, longitude} = place
      this.setState({
        destination: {
          address,
          latitude,
          longitude,
        },
      })
    })
  }

  render() {
    const {origin, destination} = this.state
    const originAddress = origin ? origin.address : null
    const destinationAddress = destination ? destination.address : null
    return (
      <View
        style={styles.container}
      >
        <PickAddress
          address={originAddress}
          handlePress={this.handleOriginPress}
          placeholder={'Endereço de Origem'}
        />
        <PickAddress
          address={destinationAddress}
          handlePress={this.handleDestinationPress}
          placeholder={'Endereço de Destino'}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    zIndex: 10,
    padding: 10,
  },
}

export default PlacesAutocomplete
