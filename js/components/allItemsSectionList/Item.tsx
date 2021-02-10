import React, {FC} from 'react'
import {ImageSourcePropType, GestureResponderEvent} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'

export type ItemProps = {
  icon?: ImageSourcePropType
  title: string
  username: string
  onPress?: (event: GestureResponderEvent) => void
}

const Item: FC<ItemProps> = ({icon, title, username, onPress}) => (
  <ListItem
    bottomDivider
    onPress={onPress}>
    <Avatar source={icon} />
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
      <ListItem.Subtitle>{username}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
)

export default Item
