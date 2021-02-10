import React, {FC, useCallback, useRef} from 'react'
import {View, StyleSheet, LayoutRectangle, GestureResponderEvent} from 'react-native'
import {Text} from 'react-native-elements'

export type SectionNavigationProps = {
  titles: string[]
  onFocus?: (sectionIndex: number) => void
}

const SectionNavigation: FC<SectionNavigationProps> = ({titles, onFocus}) => {
  const layout = useRef<LayoutRectangle>()

  const detectAndScrollToSection = useCallback((evt: GestureResponderEvent) => {
    if (layout.current) {
      const y = evt.nativeEvent.pageY - layout.current.y

      for (let i = 0; i < titles.length; i++) {
        if (i * 16 <= y && y < (i + 1) * 16) {
          onFocus && onFocus(i)
        }
      }
    }
  }, [titles, onFocus])

  return (
    <View style={styles.container}>
      <View
        onLayout={evt => layout.current = evt.nativeEvent.layout}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={detectAndScrollToSection}
        onResponderMove={detectAndScrollToSection}
      >
        {titles.map(t => (
          <Text key={t} style={styles.initial}>{t}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 6,
    justifyContent: 'center'
  },
  initial: {
    fontSize: 13
  }
})

export default SectionNavigation
