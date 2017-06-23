import {StackNavigator} from 'react-navigation'

import Home from './screens/Home'
import PlacesAutocomplete from './screens/PlacesAutocomplete'

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Autocomplete: {
    screen: PlacesAutocomplete,
  }
});
