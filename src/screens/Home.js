import React, {Component} from 'react'
import Map from '../components/Map'
import DestinationSelect from '../components/DestinationSelect'
import icon from '../assets/home.png'
import Button from '../components/Button'

import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from 'react-native'
import {connect} from 'react-redux'

class Home extends Component {
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
    const {navigation: {navigate}, destination} = this.props
    return (
      <View style={styles.container}>
        <DestinationSelect navigate={navigate} />
        <Map />
        <Button
          disabled={!destination}
          onPress={() => console.log('alarm')}
          accessibilityLabel="Ativar alarme"
        >
          Ativar alarme
        </Button>
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

const mapStateToProps = ({wekker: {destination}}) => ({destination})

export default connect(mapStateToProps)(Home)
