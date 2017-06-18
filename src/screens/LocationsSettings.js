import React, { Component } from 'react'
import Title from '../components/Title'
import settingsIcon from '../assets/settings.png'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

class LocationsSettings extends Component {
  static navigationOptions = {
    header: () => (
      <Title text={'Definir localizações'} />
    ),
    tabBarIcon: (focused, tintColor) => (
      <Image
        source={settingsIcon}
        style={styles.settingsIcon}
      />
    )
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settingsIcon: {
    width: 26,
    height: 26,
  }
})

export default LocationsSettings
