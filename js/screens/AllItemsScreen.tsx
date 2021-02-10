import React from 'react'
import {NavigationFunctionComponent} from 'react-native-navigation'
import {SafeAreaView} from 'react-native-safe-area-context'
import AllItemsSectionList from '../components/allItemsSectionList/AllItemsSectionList'
import AllItemsHeader from '../components/allItemsHeader/AllItemsHeader'

const AllItemsScreen: NavigationFunctionComponent<{}> = () => (
  <SafeAreaView>
    <AllItemsHeader />
    <AllItemsSectionList />
  </SafeAreaView>
)

AllItemsScreen.options = {
  topBar: {
    title: {
      text: 'All Items'
    }
  },
  bottomTab: {
    text: 'All Items'
  }
}

export default AllItemsScreen
