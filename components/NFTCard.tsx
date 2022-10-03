import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets  } from '../constants'
import { nftCard } from '../utils/styles'
import { nftCardProps } from '../utils/types'
import { CircularButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTtitle } from './SubInfo'

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
        <CircularButton imgUrl={assets.heart} handlePress= {()=>{}} />
      </View>
      <SubInfo />
      <View >
          <NFTtitle 
            title={data.name}
            subtitle={data.creator}
          />
          <View style={nftCard.nftTitleView}>
            <EthPrice />
            {//@ts-ignore
            <RectButton  handlePress= {()=>{navigation.navigate("Details", { data } );
            }}  />
            }
          </View>
      </View>
    </View>
  )
}


export default NFTCard