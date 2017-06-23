import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

class PlacesAutocomplete extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  handlePress = (data, details) => {
    const { navigation } = this.props
    const { handleSelect, callbackLocation } = navigation.state.params
    handleSelect(data, details)
    callbackLocation ?
      navigation.navigate(callbackLocation) :
      navigation.goBack()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <GooglePlacesAutocomplete
          placeholder='Digite o seu destino'
          autoFocus={true}
          fetchDetails={true}
          onPress={this.handlePress}
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
