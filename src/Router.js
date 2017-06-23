import {TabNavigator, TabBarBottom} from 'react-navigation'

import HomeRouter from './HomeRouter'
import Settings from './screens/Settings'

export default TabNavigator(
  {
    Home: {screen: HomeRouter},
    Settings: {screen: Settings, titleStyle: {fontSize: 28}},
  },
  {
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
      activeTintColor: '#9986FC',
    }
  }
)
