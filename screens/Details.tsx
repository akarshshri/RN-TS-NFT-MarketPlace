import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { FocusedStatusBar } from '../components'
import { RectButton } from '../components/Button'


export default function Details({ route, navigation }: any) {
  const { data } = route.params
  
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'red' }} >
        <FocusedStatusBar
          backgroundColor='transparent'
          translucent={true}
          barStyle="dark-content"
        />
        <View style={{
          // position: 'absolute',
          bottom: 0,
          left: 0
        }} >
          <RectButton handlePress={()=>{}}/>
        </View>
      </SafeAreaView>
  )
}