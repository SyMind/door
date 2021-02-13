import React, {FC, useCallback, useRef} from 'react'
import {View, StyleSheet, LayoutRectangle, GestureResponderEvent, Vibration} from 'react-native'
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
          // TODO: react native 中提供的振动 api 效果不理想
          Vibration.vibrate(30)
          onFocus && onFocus(i)
        }
      }
    }
  }, [titles, onFocus])

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={detectAndScrollToSection}
      onResponderMove={detectAndScrollToSection}
    >
      <View onLayout={evt => layout.current = evt.nativeEvent.layout}>
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
    right: 0,
    justifyContent: 'center',
    paddingRight: 6
  },
  initial: {
    fontSize: 13
  }
})

export default SectionNavigation
