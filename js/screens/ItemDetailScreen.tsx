import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {NavigationFunctionComponent} from 'react-native-navigation'

const ItemDetailScreen: NavigationFunctionComponent<{}> = () => (
  <View style={styles.root}>
    <Text>Item Detail Screen</Text>
  </View>
)

ItemDetailScreen.options = {
  topBar: {
    rightButtons: [
      {
        id: 'edit',
        text: 'Edit'
      }
    ]
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ItemDetailScreen
