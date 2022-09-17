import { View, Text, StyleSheet, Pressable, SafeAreaView, ImageBackground, Touchable} from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function App(){


  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    )
}
