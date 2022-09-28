import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets  } from '../constants'
import { nftCard } from '../utils/styles'
import { nftCardProps } from '../utils/interface'
import CircleButton from './CircleButton'

const NFTCard = ({ data }: nftCardProps) => {
  const navigation = useNavigation();

  return (
    <View style={nftCard.background} >
      <View style={nftCard.card}>
        <Image 
        source={data.image} 
        resizeMode="cover"
        style={nftCard.image}
        />
        <CircleButton />
      </View>
      <Text>NFTCard</Text>
    </View>
  )
}


export default NFTCard