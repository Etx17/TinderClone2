import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navbar from '../src/components/Navbar'

const HoroscopeScreen = () => {
  return (
    <SafeAreaView>
      <Text>This is my horoscope landing page</Text>
      <Navbar/>
    </SafeAreaView>
  )
}

export default HoroscopeScreen
