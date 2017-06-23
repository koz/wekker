import React from 'react'
import {Image} from 'react-native'
import {StackNavigator} from 'react-navigation'

import Home from './screens/Home'
import icon from './assets/home.png'
import PlacesAutocomplete from './screens/PlacesAutocomplete'


export default StackNavigator({
  Home: {
    screen: Home,
  },
  Autocomplete: {
    screen: PlacesAutocomplete,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Image
          source={icon}
          style={{
            tintColor,
            width: 26,
            height: 26,
          }}
        />
      ),
    },
  }
});
