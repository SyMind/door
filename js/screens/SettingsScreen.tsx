import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {NavigationFunctionComponent} from 'react-native-navigation'

export const SettingsScreen: NavigationFunctionComponent<{}> = () => (
  <View style={styles.root}>
    <Text>Settings Screen</Text>
  </View>
)

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings'
    }
  },
  bottomTab: {
    text: 'Settings'
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SettingsScreen
