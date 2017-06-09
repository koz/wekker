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
import {
  MKButton,
} from 'react-native-material-kit';

import icon from '../assets/settings.png'


class GeneralSettings extends Component {
  static navigationOptions = {
    title: 'Config',
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
        <MKButton
          onPress={() => this.props.navigation.navigate('Locations')}
          style={{
            backgroundColor: 'fff',
          }}
          >
          <Text pointerEvents="none"
                style={{color: '#333333', fontWeight: 'bold',}}>
            Definir destinos
          </Text>
        </MKButton>
        <MKButton
          backgroundColor="#fff"
          onPress={() => this.props.navigation.navigate('Radius')}
          >
          <Text pointerEvents="none"
                style={{color: '#333333', fontWeight: 'bold',}}>
            Raio de alarme
          </Text>
        </MKButton>
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
  icon: {
    width: 26,
    height: 26,
  },
})

export default Settings
