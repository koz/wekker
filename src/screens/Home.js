import React, {Component} from 'react'
import Map from '../components/Map'
import DestinationSelect from '../components/DestinationSelect'
import icon from '../assets/home.png'

import {
  AppRegistry,
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: (focused, tintColor) => (
      <Image
        source={icon}
        style={styles.icon}
      />
    )
  }

  render() {
    const {navigation: {navigate}} = this.props
    return (
      <View style={styles.container}>
        <DestinationSelect navigate={navigate} />
        <Map />
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
  icon: {
    width: 26,
    height: 26,
  },
})
