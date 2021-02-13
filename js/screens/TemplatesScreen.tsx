import React from 'react'
import {View, StyleSheet} from 'react-native'
import {NavigationFunctionComponent} from 'react-native-navigation'
import {Text} from 'react-native-elements'

export const TemplatesScreen: NavigationFunctionComponent = () => (
  <View style={styles.root}>
    <Text>Item Detail Screen</Text>
  </View>
)

TemplatesScreen.options = {
  topBar: {
    title: {
      text: 'Templates'
    },
    rightButtons: [
      {
        id: 'cancel',
        text: 'Cancel'
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
