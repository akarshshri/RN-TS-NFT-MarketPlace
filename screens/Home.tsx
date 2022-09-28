import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, NFTData } from '../constants'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components'


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
        <FocusedStatusBar background={ COLORS.primary } />
    </SafeAreaView>
  )
}