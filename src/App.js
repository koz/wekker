import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'
import {Location, Permissions} from 'expo'

import {setCurrentPosition} from './redux/actions'
import AppNavigator from './Router'


class App extends Component {
  getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return null
    }

    return Location.getCurrentPositionAsync({});
  }

  async componentWillMount() {
    const {setPosition} = this.props
    const initialPosition = await this.getLocationAsync()
    if (initialPosition) {
      const {coords} = initialPosition
      const {latitude, longitude} = coords
      setPosition(latitude, longitude)
    } else {
      this.setState({
        error: 'Permission not granted'
      })
    }

    this.watcher = await Location.watchPositionAsync({}, (position) => {
      const {coords} = initialPosition
      const {latitude, longitude} = coords
      setPosition(latitude, longitude)
    })
  }

  componentWillUnmount() {
    this.watcher.remove()
  }

  render() {
    const {navigation, dispatch} = this.props
    const fullNavigation = addNavigationHelpers({dispatch, state: navigation})
    return <AppNavigator navigation={fullNavigation} />
  }
}

const mapStateToProps = ({navigation}) => ({navigation})
const mapDispatchToProps = dispatch => ({
  setPosition: (lat, lng) => dispatch(setCurrentPosition(lat, lng)),
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
