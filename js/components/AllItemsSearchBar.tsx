import React, {FC, useState} from 'react'
import {View, StyleSheet, LayoutAnimation} from 'react-native'
import {Text, ButtonGroup, SearchBar} from 'react-native-elements'

const component1 = () => <Text>Titles</Text>
const component2 = () => <Text>Fields</Text>
const component3 = () => <Text>Passwords</Text>

const buttons = [
  {element: component1},
  {element: component2},
  {element: component3}
]

const AllItemsSearchBar: FC<{}> = () => {
  const [filterHeight, setFilterHeight] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [index, setIndex] = useState(0)

  return (
    <View style={styles.header}>
      <SearchBar
        platform="ios"
        style={styles.searchBar}
        placeholder="Search in all items"
        value={searchText}
        onChangeText={setSearchText}
        onFocus={() => {
          LayoutAnimation.easeInEaseOut()
          setFilterHeight(40)
        }}
        onBlur={() => {
          LayoutAnimation.easeInEaseOut()
          setFilterHeight(0)
        }}
      />
      <View style={{height: filterHeight}}>
        <ButtonGroup
          selectedButtonStyle={styles.selectedButton}
          selectedIndex={index}
          buttons={buttons}
          containerStyle={styles.buttonGroupContainer}
          onPress={setIndex}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    overflow: 'hidden'
  },
  searchBar: {
    width: '100%'
  },
  buttonGroupContainer: {
    height: 30,
    backgroundColor: '#e6e6e6'
  },
  selectedButton: {
    backgroundColor: '#fff'
  }
})

export default AllItemsSearchBar
