import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import {
  View,
  Dimensions
} from 'react-native'

class PlacesAutocomplete extends Component {
  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <View>
        <GooglePlacesAutocomplete
          placeholder='Endereço de destino!!'
          autoFocus
          onPress={(data) => {
            console.log(data)
          }}
          query={{
            key: 'AIzaSyAnk9dToeoLZPY67jfYfh_1nt1cGfYZGCs',
            language: 'pt',
            types: 'geocode',
          }}
          currentLocation={true}
          currentLocationLabel="Current Location"
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            types: 'food',
          }}
          debounce={0}
          renderDescription={(row) => {
            return row.description
          }}
          styles={{
            listView: {
              position: 'absolute',
              width,
              height,
            },
          }}
        />
      </View>
    )
  }
}

PlacesAutocomplete.propTypes = {

}

export default PlacesAutocomplete
