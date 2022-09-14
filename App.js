import { View, Text, StyleSheet, Pressable, SafeAreaView, ImageBackground, Touchable} from 'react-native'
import React, {useState} from 'react'
import Card from './src/components/Card'
import users from './assets/data/users'
import Swiper from 'react-native-deck-swiper';
import {HomeScreen} from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  const activeColor = 'purple'
  const [activeScreen, setActiveScreen] = useState('HOME');
    return (
    <SafeAreaView style={styles.pageContainer}>
        {/* <MatchesScreen/> */}
      {activeScreen == 'HOME' && <HomeScreen/>}
      {activeScreen == 'MATCHES' && <MatchesScreen/>}

      {/* Icons */}
      <View style={{width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection:'row', paddingHorizontal: 30, paddingVertical: 10}}>
        <Pressable onPress={()=> setActiveScreen('HOME')}>
          <Ionicons name="md-home-sharp" size={40} color={activeScreen == 'HOME' ? activeColor : "grey"}/>
        </Pressable>
        <Pressable>
          <Ionicons name="ios-planet" color={activeScreen == 'CHART' ? activeColor : "grey"} size={40} />
        </Pressable>
        <Pressable onPress={()=> setActiveScreen('MATCHES')}>
          <Ionicons name="chatbubble-ellipses" color={activeScreen == 'MATCHES' ? activeColor : "grey"} size={40} />
        </Pressable>
        <Pressable>
          <FontAwesome name="user" color={activeScreen == 'PROFILE' ? activeColor : "grey"} size={40} />
        </Pressable>
      </View>
    </SafeAreaView>
    )
  }
const styles = StyleSheet.create({
  pageContainer : {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: '#ededed',
  }
})
export default App
