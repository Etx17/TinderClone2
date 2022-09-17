import { View, Text, StyleSheet, Pressable, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import Card from '../src/components/Card/index'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import users from '../../assets/data/users'
import {useNavigation} from "@react-navigation/core"
import Navbar from '../src/components/Navbar';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Card/>
      <Navbar/>
    </SafeAreaView>
  )
}
export default HomeScreen
