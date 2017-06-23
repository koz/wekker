import {StackNavigator} from 'react-navigation'
import PlacesAutocomplete from './screens/PlacesAutocomplete'
import Home from './screens/Home'

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Autocomplete: {
    screen: PlacesAutocomplete,
  }
});
