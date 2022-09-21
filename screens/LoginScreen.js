import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <View>
      <Text> This is the Login Screen</Text>
    </View>
  )
}

export default LoginScreen
