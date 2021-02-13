import React, {useEffect} from 'react'
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation'
import {SafeAreaView} from 'react-native-safe-area-context'
import AllItemsSearchBar from '../components/AllItemsSearchBar'
import AllItemsSectionList from '../components/allItemsSectionList/AllItemsSectionList'

export const AllItemsScreen: NavigationFunctionComponent<{}> = () => {
  useEffect(() => {
    const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(evt => {
        if (evt.buttonId === 'add') {
          Navigation.showModal({
            stack: {
              children: [
                {
                  component: {
                    name: 'NewItem',
                    options: {
                      topBar: {
                        title: {
                          text: 'New Item'
                        }
                      }
                    }
                  }
                }
              ]
            }
          })
        }
      })

    return () => {
      navigationButtonEventListener.remove()
    }
  }, [])

  return (
    <SafeAreaView>
      <AllItemsSearchBar />
      <AllItemsSectionList />
    </SafeAreaView>
  )
}

AllItemsScreen.options = {
  topBar: {
    title: {
      text: 'All Items'
    },
    rightButtons: [
      {
        id: 'add',
        systemItem: 'add'
      }
    ]
  },
  bottomTab: {
    text: 'All Items'
  }
}
