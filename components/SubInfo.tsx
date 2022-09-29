import { View, Text, Image } from 'react-native'
import React from 'react'
import { subInfoStyle } from '../utils/styles'
import { assets, SIZES } from '../constants'
import { imgUrlProps, nftTitleProps } from '../utils/types'

export function SubInfo() {
  return (
    <View style={subInfoStyle.background}>
      <People />
      <EndDate />
    </View>
  )
}

export function NFTtitle({title, subtitle}:nftTitleProps) {
  return (
    <View>
      <Text style={subInfoStyle.nftTitle} >{title}</Text>
      <Text style={subInfoStyle.nftSubtitle} >{subtitle}</Text>
    </View>
  )
}

export function EthPrice() {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  )
}

export function ImageCmp({imgUrl, index}: imgUrlProps ) {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{...subInfoStyle.ImageCmp, marginLeft: index === 0? 0 : -SIZES.font}}
    />
  )
}

export function People() {
  return (
    <View style={subInfoStyle.people}>
      {[assets.person04, assets.person02, assets.person03].map((imgUrl, index)=>{
        return <ImageCmp
        imgUrl={imgUrl}
        index={index}
         />
      })}
    </View>
  )
}

export function EndDate() {
  return (
    <View style={subInfoStyle.endDateBtn}>
      <Text style={subInfoStyle.endDateText} >Ending in</Text>
      <Text style={subInfoStyle.endDateTime} >12h 30m</Text>
    </View>
  )
}
