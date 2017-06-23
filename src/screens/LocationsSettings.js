import React, { Component } from 'react'
import settingsIcon from '../assets/settings.png'
import arrowIcon from '../assets/arrow.png'
import { navigationStyles } from '../utils/header'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Image,
  Easing,
  Text
} from 'react-native'

const Item = title => ({
  title,
  value: null,
  opened: false
})

class LocationsSettings extends Component {
  static navigationOptions = {
    title: 'Definir localização',
    ...navigationStyles,
    tabBarIcon: (focused, tintColor) => (
      <Image
        source={settingsIcon}
        style={styles.settingsIcon}
      />
    )
  }

  handleLocationClick = (index) => {
    const {navigate} = this.props
    navigate('Autocomplete')
  }

  state = {
    list: [
      new Item('Casa'),
      new Item('Trabalho')
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.list.map((l, i) => (
            <View key={i} style={styles.itemContainer}>
              <TouchableHighlight
                underlayColor={'#FFF'}
                onPress={() => this.handleLocationClick(i)}
                style={styles.button}
              >
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>
                    { l.title.toUpperCase() }
                  </Text>
                  <Animated.Image
                    style={styles.arrowIcon}
                    source={arrowIcon}
                  />
                </View>
              </TouchableHighlight>
            </View>
          ))
        }
      </View>
    )
  }
}

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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#FFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
    marginRight: 10
  },
  settingsIcon: {
    width: 26,
    height: 26
  }
})

export default LocationsSettings
