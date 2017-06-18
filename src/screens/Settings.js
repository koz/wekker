import React, { Component } from 'react'
import {
  View,
  Button,
  Image,
  StyleSheet,
  Text,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import RadiusSettings from './RadiusSettings'
import SoundSettings from './SoundSettings'
import LocationsSettings from './LocationsSettings'

import icon from '../assets/settings.png'


class GeneralSettings extends Component {
  static navigationOptions = {
    header: () => (
      <View style={{backgroundColor: 'white', padding: 30}}>
        <View style={{borderBottomWidth: 1, borderColor: '#ccc'}}>
          <Text style={{fontSize: 28, color: 'black', marginBottom: 20, fontWeight: 'bold'}}>
            Configurações
          </Text>
        </View>
      </View>
    ),
    tabBarIcon: (focused, tintColor) => (
      <Image
        source={icon}
        style={styles.icon}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Locations')}
            title="Definir destinos"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Radius')}
            title="Raio de alarme"
          />
        </View>
      </View>
    )
  }
}

const Settings = StackNavigator({
  General: {screen: GeneralSettings},
  Radius: {screen: RadiusSettings},
  Sound: {screen: SoundSettings},
  Locations: {screen: LocationsSettings},
})

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 40,
  },
  buttonContainer: {
    margin: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 26,
    height: 26,
  },
})

export default Settings
