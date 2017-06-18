import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import AppNavigator from './Router'
import reducer from './redux/reducer'
import AppWithNavigationState from './App'

import {
  View,
  Text
} from 'react-native'

const {router} = AppNavigator
const initialState = router.getStateForAction(router.getActionForPathAndParams('Home'))

const navReducer = (state = initialState, action) => {
  const nextState = router.getStateForAction(action, state)

  return nextState || state
}
const appReducer = combineReducers({
  nav: navReducer,
  wekker: reducer,
});
const store = createStore(appReducer, __DEV__ ? applyMiddleware(logger) : null)

const Root = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}

export default Root
