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
    this.handlePress = this.handlePress.bind(this)
  }

  openSearchModal() {
    return RNGooglePlaces.openAutocompleteModal({
      country: 'BR'
    })
    .catch(error => alert(error.message))
  }

  handlePress() {
    this.openSearchModal()
    .then((place) => {
      const {address, latitude, longitude} = place
      const {onDestinationSelect} = this.props
      onDestinationSelect(latitude, longitude, address)
    })
  }

  render() {
    const {onDestinationSelect, destination} = this.props
    const address = destination ? destination.address : null
    return (
      <View
        style={styles.container}
      >
        <PickAddress
          address={address}
          handlePress={this.handlePress}
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
