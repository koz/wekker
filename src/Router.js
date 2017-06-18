import { TabNavigator } from 'react-navigation'
// import Home from './screens/Home'
import Settings from './screens/Settings'
import HomeRouter from './HomeRouter'

const Weeker = TabNavigator({
  Home: {screen: HomeRouter},
  Settings: {screen: Settings},
}, {
  tabBarPosition: 'bottom',
})

export default Weeker
