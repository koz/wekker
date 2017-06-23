import React, { Component } from 'react'
import { connect } from 'react-redux'
import settingsIcon from '../assets/settings.png'
import arrowIcon from '../assets/arrow.png'
import { setLocations } from '../redux/actions'
import {
  View,
  Text,
  Image,
  Easing,
  Animated,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

class LocationsSettings extends Component {
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
    const { navigate } = this.props.navigation
    navigate('Autocomplete', {
      callbackLocation: 'Locations',
      handleSelect: (data, details) => (
        this.props.setLocations(this.props.locations.map((l, i) => {
          if (i === index) return { ...l, value: details.formatted_address }
          return { ...l }
        }))
      )
    })
  }

  render() {
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
                <View style={styles.buttonWrapper}>
                  <View>
                    <Text style={styles.buttonText}>
                      { l.title.toUpperCase() }
                    </Text>
                    { l.value ? (
                      <Text>
                        { l.value }
                      </Text>
                    ) : null }
                  </View>
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

export default connect(mapStateToProps, mapActionsCreators)(LocationsSettings)
