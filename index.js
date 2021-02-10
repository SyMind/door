import {Navigation} from 'react-native-navigation'
import AllItemsScreen from './js/screens/AllItemsScreen'
import SettingsScreen from './js/screens/SettingsScreen'
import ItemDetailScreen from './js/screens/ItemDetailScreen'

Navigation.registerComponent('AllItems', () => AllItemsScreen)
Navigation.registerComponent('ItemDetail', () => ItemDetailScreen)
Navigation.registerComponent('Settings', () => SettingsScreen)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'AllItems'
                  }
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  })
})
