import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, NFTData } from '../constants'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components'
import { homeScreen } from '../utils/styles'


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
        <FocusedStatusBar background={ COLORS.primary } />
        <View style={{ flex: 1 }} >
          <View style={{ zIndex: 0 }} >
            <FlatList
              data={NFTData}
              renderItem={({item})=>{
                return <NFTCard data={item} />
              }}
              keyExtractor={(item)=>{return item.id}}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader/>}
            />
          </View>
          <View style={homeScreen.background}>
              <View style={{height: 300, backgroundColor: COLORS.primary}} />
              <View style={{flex: 1, backgroundColor: COLORS.white}} />
          </View>
        </View>
    </SafeAreaView>
  )
}

