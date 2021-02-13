import React, {useMemo, FC, useRef} from 'react'
import {View, SectionList, StyleSheet} from 'react-native'
import SectionHeader from './SectionHeader'
import Item from './Item'
import SectionNavigation from './SectionNavigation'

const DATA = [
  {
    title: 'A',
    data: ['Pizza', 'Burger', 'Risotto', 'Pizza1', 'Burger1', 'Risotto1', 'Pizza2', 'Burger2', 'Risotto2', 'Pizza3', 'Burger3', 'Risotto3']
  },
  {
    title: 'B',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps', 'French Fries1', 'Onion Rings1', 'Fried Shrimps1', 'French Fries2', 'Onion Rings2', 'Fried Shrimps2']
  },
  {
    title: 'C',
    data: ['Water', 'Coke', 'Beer']
  },
  {
    title: 'D',
    data: ['Cheese Cake', 'Ice Cream']
  }
]

const AllItemsSectionList: FC<{}> = () => {
  const sectionList = useRef<SectionList<string>>(null)
  const titles = useMemo(() => DATA.map(x => x.title), [])

  return (
    <View style={styles.container}>
      <SectionList
        ref={sectionList}
        style={styles.sectionList}
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} username={item} />}
        renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
        onScroll={(event) => {
          event.nativeEvent.contentOffset
        }}
      />
      <SectionNavigation
        titles={titles}
        onFocus={sectionIndex => {
          sectionList.current?.scrollToLocation({
            animated: false,
            itemIndex: 0,
            sectionIndex
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  sectionList: {
    width: '100%'
  }
})

export default AllItemsSectionList
