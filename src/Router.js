import { StackNavigator } from 'react-navigation'
import Home from './screens/Home'
import RadiusSettings from './screens/RadiusSettings'
import SoundSettings from './screens/SoundSettings'
import LocationsSettings from './screens/LocationsSettings'
import Settings from './screens/Settings'

const Weeker = StackNavigator({
  Home: {screen: Home},
  Radius: {screen: RadiusSettings},
  Settings: {screen: Settings},
  Sound: {screen: SoundSettings},
  Locations: {screen: LocationsSettings},
})

export default Weeker
