import React, {Component} from 'react'
import Switch from 'react-native-switch-pro'
import {StackNavigator} from 'react-navigation'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import RadiusSettings from './RadiusSettings'
import SoundSettings from './SoundSettings'
import LocationsSettings from './LocationsSettings'

import settingsIcon from '../assets/settings.png'
import arrowIcon from '../assets/arrow.png'
import icon from '../assets/settings.png'


class GeneralSettings extends Component {
  static navigationOptions = {
    title: 'Configurações',
    tabBarIcon: (focused, tintColor) => (
      <Image
        source={settingsIcon}
        style={styles.settingsIcon}
      />
    )
  }

  state = {
    isActive: false
  }

  handleNotificationsChange = value => this.setState({ isActive: value })

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.toggleWrapper}>
            <Text style={styles.buttonText}>
              NOTIFICAÇÕES
            </Text>
            <Switch
              style={styles.switch}
              value={this.state.isActive}
              onSyncPress={this.handleNotificationsChange}
              backgroundActive="#9986FC"
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <TouchableHighlight
            underlayColor={'#FFF'}
            onPress={() => navigate('Locations')}
            style={styles.button}
          >
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>
                DEFINIR DESTINOS
              </Text>
              <Image
                source={arrowIcon}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.itemContainer}>
          <TouchableHighlight
            underlayColor={'#FFF'}
            onPress={() => navigate('Radius')}
            style={styles.button}
          >
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>
                RAIO DE ALARME
              </Text>
              <Image
                source={arrowIcon}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const Settings = StackNavigator({
  General: {screen: GeneralSettings},
  Radius: {screen: RadiusSettings},
  Sound: {screen: SoundSettings},
  Locations: {screen: LocationsSettings}
})

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 20,
    backgroundColor: '#FFF',
    paddingBottom: 40,
  },
  itemContainer: {
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: '#CCC'
  },
  arrowIcon: {
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
    marginRight: 10
  },
  settingsIcon: {
    width: 26,
    height: 26,
  },
  toggleWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#FFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  switch: {
    alignSelf: 'flex-end',
    borderRadius: 15,
  }
})

export default Settings
