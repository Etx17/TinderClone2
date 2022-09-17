import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navbar from '../src/components/Navbar'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text>This is my profile</Text>
      <Navbar/>
    </SafeAreaView>
  )
}

export default ProfileScreen
