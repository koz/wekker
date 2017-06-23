import React from 'react'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'

import AppNavigator from './Router'
import reducer from './redux/reducer'
import AppWithNavigationState from './App'

const {router: {getStateForAction, getActionForPathAndParams}} = AppNavigator
const navigation = getStateForAction(getActionForPathAndParams('Home'))

const navReducer = (state = navigation, action) => {
  const nextState = getStateForAction(action, state)
  return nextState || state
}
const appReducer = combineReducers({navigation: navReducer, wekker: reducer});
const store = createStore(appReducer, __DEV__ ? applyMiddleware(logger) : null)

export default function Root () {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}
