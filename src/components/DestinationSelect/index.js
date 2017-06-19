import React, {Component} from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import PickAddress from './PickAddress'

class PlacesAutocomplete extends Component {
  constructor(props) {
    super(props)
    this.openSearchModal = this.openSearchModal.bind(this)
  }

  openSearchModal() {
    const {navigate} = this.props
    navigate('Autocomplete', {
      handleSelect: (data, details) => {
        console.log(data, details)
      },
    })
  }

  render() {
    const {onDestinationSelect, destination, navigate} = this.props
    const address = destination ? destination.address : null
    return (
      <View
        style={styles.container}
      >
        <PickAddress
          address={address}
          handlePress={this.openSearchModal}
          placeholder='Endereço de Destino'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    padding: 10,
  },
})

export default PlacesAutocomplete
