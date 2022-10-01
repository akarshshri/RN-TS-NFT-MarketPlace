import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { circularButtonProps, rectButtonProps } from '../utils/types'
import { circularButtonStyle, rectButtonStyle } from '../utils/styles'
import { COLORS } from '../constants'

export function CircularButton({ imgUrl, handlePress }: circularButtonProps) {
  return (
    <TouchableOpacity style={circularButtonStyle.button}>
      <Image
        source={imgUrl}
        resizeMode={'contain'}
        style={circularButtonStyle.image}
      />
    </TouchableOpacity>
  )
}

export function RectButton({ handlePress }: rectButtonProps) {
  return (
    <TouchableOpacity style={rectButtonStyle.button} >
    <Button title='Place a Bid' onPress={handlePress} color={COLORS.white} />
    </TouchableOpacity>
  )
}