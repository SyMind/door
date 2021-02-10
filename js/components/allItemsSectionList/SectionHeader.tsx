import React, {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export type SectionHeaderProps = {
  title: string
}

const SectionHeader: FC<SectionHeaderProps> = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 26,
    paddingHorizontal: 20,
    backgroundColor: '#e6e6e6'
  },
  title: {
    fontSize: 13,
    fontWeight: '500'
  }
})

export default SectionHeader
