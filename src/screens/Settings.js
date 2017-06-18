import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Switch,
  Text,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import RadiusSettings from './RadiusSettings'
import SoundSettings from './SoundSettings'
import LocationsSettings from './LocationsSettings'
import Title from '../components/Title'

import settingsIcon from '../assets/settings.png'
import arrowIcon from '../assets/arrow.png'
import icon from '../assets/settings.png'


class GeneralSettings extends Component {
  static navigationOptions = {
    header: () => (
      <Title text={'Configurações'} />
    ),
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
              onValueChange={this.handleNotificationsChange}
              tintColor={'#9986fc'}
              thumbTintColor={'#FF9000'}
              onTintColor={'#999999'}
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Locations')}
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
            onPress={() => this.props.navigation.navigate('Radius')}
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
  Locations: {screen: LocationsSettings},
})

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 20,
    backgroundColor: '#FFF',
    paddingBottom: 40,
  },
  itemContainer: {
    paddingTop: 30,
    paddingBottom: 30,
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonWrapper: {
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
    alignSelf: 'flex-end'
  }
})

export default Settings
