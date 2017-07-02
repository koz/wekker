import {connect} from 'react-redux'
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'

import PickAddress from './PickAddress'
import {addDestination} from '../../redux/actions'

class PlacesAutocomplete extends Component {
  constructor(props) {
    super(props)
    this.openSearchModal = this.openSearchModal.bind(this)
  }

  openSearchModal() {
    const {navigate, addDestination} = this.props
    navigate('Autocomplete', {
      handleSelect: (data, details) => {
        const {formatted_address: address, geometry} = details || {}
        const {location} = geometry || {}
        const {lng, lat} = location
        addDestination(lat, lng, address)
      },
      showPredefinedPlaces: true,
    })
  }

  render() {
    const {destination, navigate} = this.props
    const address = destination ? destination.address : null
    return (
      <View style={styles.container}>
        <PickAddress
          address={address}
          handlePress={this.openSearchModal}
          placeholder='Digite o seu destino'
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

const mapStateToProps = ({wekker: {destination}}) => ({destination})

const mapDispatchToProps = dispatch => ({
  addDestination: (lat, lng, address) => dispatch(addDestination(lat, lng, address)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacesAutocomplete)
