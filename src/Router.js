import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation'
import Settings from './screens/Settings'
import HomeRouter from './HomeRouter'

const Weeker = TabNavigator({
  Home: {screen: HomeRouter},
  Settings: {screen: Settings},
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: 'white'
    },
    labelStyle: {
      color: 'black',
    },
    showIcon: true,
    showLabel: false,
  }
})

export default Weeker
