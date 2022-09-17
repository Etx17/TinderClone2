import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import MatchesScreen from './screens/MatchesScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Matches" component={MatchesScreen} />
  </Stack.Navigator>
  )
}

export default StackNavigator
