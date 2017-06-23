import {connect} from 'react-redux'
import React, {Component} from 'react'
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  AppRegistry,
} from 'react-native'

import Map from '../components/Map'
import icon from '../assets/home.png'
import Button from '../components/Button'
import {startTracking} from '../redux/actions'
import {getCoordsDistance} from '../utils/mapUtils'
import DistanceIndicator from '../components/DistanceIndicator'
import DestinationSelect from '../components/DestinationSelect'

class Home extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => (
      <Image
        source={icon}
        style={[
          styles.icon,
          {tintColor},
        ]}
      />
    )
  }

  render() {
    const {
      navigation: {navigate},
      destination,
      startTracking,
      currentPosition,
      tracking,
    } = this.props
    const {width, height} = Dimensions.get('window')
    const distance = destination && getCoordsDistance({
      latitude: currentPosition.lat,
      longitude: currentPosition.lng,
    }, {
      latitude: destination.lat,
      longitude: destination.lng,
    })

    return (
      <View style={styles.container}>
        <DestinationSelect navigate={navigate} />
        <Map />
        {
          tracking
          ? (
            <DistanceIndicator distance={distance} />
          )
          : (
            <Button
              disabled={!destination}
              onPress={() => startTracking()}
              accessibilityLabel="Ativar alarme"
              buttonStyle={{
                width: width * 0.8,
              }}
            >
              Ativar alarme
            </Button>
          )
        }
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

const mapStateToProps = ({wekker: {destination, tracking, currentPosition}}) => ({destination, tracking, currentPosition})
const mapDispatchToProps = dispatch => ({
  startTracking: () => dispatch(startTracking())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
