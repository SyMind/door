import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {NavigationFunctionComponent} from 'react-native-navigation'
import {ListItem} from 'react-native-elements'

export const SettingsScreen: NavigationFunctionComponent<{}> = () => (
  <ScrollView style={styles.container}>
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Lock Now</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
    
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>General</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Security</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Autofill</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  </ScrollView>
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
  container: {
    flex: 1
  }
})
