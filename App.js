import { View, Text, StyleSheet, Pressable, SafeAreaView, ImageBackground, Touchable} from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {withAuthenticator} from 'aws-amplify-react-native'

Amplify.configure(awsconfig)

function App(){
  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    )
}

export default withAuthenticator(App);
