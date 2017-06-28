import {connect} from 'react-redux'
import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {
  View,
  Text,
  Image,
  Easing,
  Animated,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native'

import arrowIcon from '../assets/arrow.png'
import {setLocations} from '../redux/actions'
import settingsIcon from '../assets/settings.png'
import PlacesAutocomplete from './PlacesAutocomplete'

class LocationsGeneral extends Component {
  static navigationOptions = {
    title: 'Definir localização',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={settingsIcon}
        style={[
          styles.settingsIcon,
          {tintColor},
        ]}
      />
    )
  }

  handleLocationClick = (index) => {
    const {
      navigation: {navigate},
      setLocations,
      locations,
     } = this.props
    navigate('LocationsAutocomplete', {
      handleSelect: (data, {formatted_address, geometry}) => (
        setLocations(locations.map((l, i) => {
          if (i === index) return { ...l, value: formatted_address, geometry }
          return { ...l }
        }))
      ),
      showPredefinedPlaces: false,
    })
  }

  render() {
    const {width, height} = Dimensions.get('window')

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {
          this.props.locations.map((l, i) => (
            <View key={i} style={styles.itemContainer}>
              <TouchableHighlight
                underlayColor={'#FFF'}
                onPress={() => this.handleLocationClick(i)}
                style={styles.button}
              >
                <View style={styles.locationWrapper}>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.title}>
                      { l.title.toUpperCase() }
                    </Text>
                    <Animated.Image
                      style={styles.arrowIcon}
                      source={arrowIcon}
                    />
                  </View>
                  { l.value ? (
                    <Text
                      style={{
                        width: width * 0.8,
                        color: 'gray'
                      }}
                    >
                      { l.value }
                    </Text>
                  ) : null }
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
    justifyContent: 'space-between',
    alignItems: 'center'
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
    marginRight: 10
  },
  settingsIcon: {
    width: 26,
    height: 26
  }
})

const mapActionsCreators = { setLocations }

const mapStateToProps = state => ({
  locations: state.wekker.locations
})

const connectedLocationsGeneral = connect(mapStateToProps, mapActionsCreators)(LocationsGeneral)

export default StackNavigator(
  {
    LocationsGeneral: {screen: connectedLocationsGeneral},
    LocationsAutocomplete: {
      screen: PlacesAutocomplete,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Image
            source={settingsIcon}
            style={[
              styles.settingsIcon,
              {tintColor},
            ]}
          />
        ),
      },
    },
  },
  {headerMode: 'none'}
)
