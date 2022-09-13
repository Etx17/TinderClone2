import { View, Text, StyleSheet, Pressable, SafeAreaView, ImageBackground, Touchable} from 'react-native'
import React from 'react'
import Card from './src/components/Card'
import users from './assets/data/users'
import Swiper from 'react-native-deck-swiper';
import {HomeScreen} from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const App = () => (
    <SafeAreaView style={styles.pageContainer}>
        <MatchesScreen/>
        <View style={{width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection:'row', paddingHorizontal: 30, paddingVertical: 10}}>
          <Ionicons name="md-home-sharp" size={40} color="grey"/>
          <Ionicons name="ios-planet" color="grey" size={40} />
          <Ionicons name="chatbubble-ellipses" color="grey" size={40} />
          <FontAwesome name="user" color="grey" size={40} />
        </View>
      {/* <HomeScreen/> */}
    </SafeAreaView>
)
const styles = StyleSheet.create({
  pageContainer : {
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
})
export default App
