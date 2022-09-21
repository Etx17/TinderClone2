import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import MatchesScreen from './screens/MatchesScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HoroscopeScreen from './screens/HoroscopeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useAuth();
  return (
  <Stack.Navigator>
    {user ? (
    <>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Matches" component={MatchesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Horoscope" component={HoroscopeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    </>
    ) : (
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    )}
  </Stack.Navigator>
  )
}

export default StackNavigator
