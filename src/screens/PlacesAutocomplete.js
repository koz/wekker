import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native'

class PlacesAutocomplete extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }
  render () {
    const {navigation: {state: {params: {handleSelect}}}} = this.props
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='Endereço de Destino'
          autoFocus={true}
          fetchDetails={true}
          onPress={(data, details) => {
            handleSelect(data, details)
            navigation.goBack()
          }}
          query={{
            key: 'AIzaSyAnk9dToeoLZPY67jfYfh_1nt1cGfYZGCs',
            language: 'pt',
            types: 'geocode',
          }}
          nearbyPlacesAPI="GoogleReverseGeocoding"
          GoogleReverseGeocodingQuery={{
            types: 'street_address|route|country|neighborhood|premise|postal_code|aiport|park|point_of_interest|establishment|street_number',
            language: 'pt',
          }}
          debounce={200}
          renderDescription={(row) => row.description}
          styles={{
            textInput: styles.textInput,
            textInputContainer: styles.textInputContainer,
            listView: styles.listView,
            row: styles.row,
          }}
          ref = {(instance) => { this.GooglePlacesRef = instance }}
          renderRightButton={() => (
            <TouchableHighlight
              style={styles.clearButton}
              onPress={() => {
                this.GooglePlacesRef.refs.textInput.clear()
              }}
              underlayColor='#ffffff'
            >
              <Image
                style={styles.clearImage}
                source={require('../assets/clear.png')}
              />
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}

PlacesAutocomplete.propTypes = {
  navigation: PropTypes.object,
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    marginLeft: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  textInputContainer: {
    backgroundColor: '#FFFFFF',
    width,
  },
  listView: {
    backgroundColor: '#FFFFFF',
    width,
    height,
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  clearButton: {
    alignSelf: 'center',
    marginRight: 15,
  },
  clearImage: {
    height: 15,
    width: 15,
  }
})

export default PlacesAutocomplete
