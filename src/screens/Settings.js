import React, { Component } from 'react'
import {
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import RadiusSettings from './RadiusSettings'
import SoundSettings from './SoundSettings'
import LocationsSettings from './LocationsSettings'

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
      <View>
        <Button
          title="Definir localizações"
          onPress={() => this.props.navigation.navigate('Locations')}
        />
        <Button
          title="Raio do alarme"
          onPress={() => this.props.navigation.navigate('Radius')}
        />
        <Button
          title="Som"
          onPress={() => this.props.navigation.navigate('Sound')}
        />
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
  icon: {
    width: 26,
    height: 26,
  },
})

export default Settings
