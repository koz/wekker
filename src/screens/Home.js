import React, {Component} from 'react'
import Map from '../components/Map'
import PlacesAutocomplete from '../components/PlacesAutocomplete'
import axios from 'axios'

import {
  AppRegistry,
  StyleSheet,
  View,
  Button,
} from 'react-native'

const API_KEY = 'AIzaSyAnk9dToeoLZPY67jfYfh_1nt1cGfYZGCs'

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    title: 'Início',
  }
  constructor(props) {
    super(props)
    this.state = {}
    this.setDestination = this.setDestination.bind(this)
  }

  setDestination(lat, lng, address) {
    if (!address) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)
      .then(({data: {results}}) => {
        const {formatted_address: formattedAddress} = results[0]
        this.setState({
          destination: {
            latitude: lat,
            longitude: lng,
            address: formattedAddress,
          }
        })
      })
    } else (
      this.setState({
        destination: {
          latitude: lat,
          longitude: lng,
          address: address,
        },
      })
    )
  }

  render() {
    const {destination} = this.state
    const {navigation: {navigate}} = this.props
    return (
      <View style={styles.container}>
        <PlacesAutocomplete
          destination={destination}
          navigate={navigate}
          onDestinationSelect={this.setDestination}
        />
        <Map
          destination={destination}
          onDestinationSelect={this.setDestination}
        />
        <Button
          title="Ativar alarme"
          onPress={() => console.log('alarm')}
          accessibilityLabel="Ativar alarme"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingBottom: 40,
  },
})
