import { View, Text, StyleSheet, Pressable, SafeAreaView, ImageBackground, Touchable} from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';


export default function App(){
  return (
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator/>
        </AuthProvider>
      </NavigationContainer>
    );
};
