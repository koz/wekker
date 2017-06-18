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
  }

  openSearchModal() {
    const {navigate} = this.props
    navigate('Autocomplete')
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
          handlePress={this.openSearchModal}
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
