import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'

import AppNavigator from './Router'

function App ({navigation, dispatch}) {
  const fullNavigation = addNavigationHelpers({dispatch, state: navigation})
  return <AppNavigator navigation={fullNavigation} />
}

const mapStateToProps = ({navigation}) => ({navigation})

export default connect(mapStateToProps)(App)
