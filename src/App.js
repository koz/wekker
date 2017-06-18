import React from 'react'
import AppNavigator from './Router'
import {
  View,
  Text
} from 'react-native'
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux'

const App = (props) => {
  const {router} = AppNavigator
  const {nav, dispatch} = props
  return (
    <AppNavigator navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
    />
  )
}

const mapStateToProps = ({nav}) => ({nav});

export default connect(mapStateToProps)(App)
