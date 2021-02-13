import React, {useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation'
import {ListItem} from 'react-native-elements'

type NewItemScreenProps = NavigationFunctionComponent<{previousScreenId: string}>

export const NewItemScreen: NewItemScreenProps = ({componentId}) => {
  useEffect(() => {
    const navigationButtonEventListener = Navigation
      .events()
      .registerNavigationButtonPressedListener(evt => {
        if (evt.buttonId === 'cancel') {
          Navigation.dismissModal(componentId)
        }
      })

    return () => {
      navigationButtonEventListener.remove()
    }
  }, [componentId])


  return (
    <View style={styles.container}>
      <ListItem
        bottomDivider
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: 'Templates'
            }
          })
        }}
      >
        <ListItem.Content>
          <ListItem.Title>Login</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  )
}

NewItemScreen.options = {
  topBar: {
    title: {
      text: 'All Items'
    },
    rightButtons: [
      {
        id: 'cancel',
        text: 'Cancel'
      }
    ],
    searchBar: {
      visible: true,
      hideTopBarOnFocus: true,
      placeholder: 'Search in templates'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
