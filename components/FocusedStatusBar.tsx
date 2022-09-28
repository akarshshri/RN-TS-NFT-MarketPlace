import { View, Text } from 'react-native'
import React from 'react'

interface Props{
  background: string
}

const FocusedStatusBar = (props: Props) => {
  return (
    <View>
      <Text>FocusedStatusBar</Text>
    </View>
  )
}

export default FocusedStatusBar