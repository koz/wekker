import { TabNavigator } from 'react-navigation'
import Home from './screens/Home'
import Settings from './screens/Settings'

const Weeker = TabNavigator({
  Home: {screen: Home},
  Settings: {screen: Settings},
}, {
  tabBarPosition: 'bottom',
})

export default Weeker
