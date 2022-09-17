import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core'

const Navbar = () => {
  const navigation = useNavigation();

  return (
      <View style={{width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection:'row', paddingHorizontal: 30, paddingVertical: 10}}>
        <Pressable  onPress={()=> navigation.navigate('Home')}>
          <Ionicons style={styles.button}name="md-home-sharp" />
        </Pressable>
        <Pressable  onPress={()=> navigation.navigate('Horoscope')}>
          <Ionicons style={styles.button}name="ios-planet" />
        </Pressable>
        <Pressable  onPress={()=> navigation.navigate('Matches')}>
          <Ionicons style={styles.button}name="chatbubble-ellipses"  />
        </Pressable>
        <Pressable  onPress={()=> navigation.navigate('Profile')}>
          <FontAwesome style={styles.button} name="user"/>
        </Pressable>
      </View>
  )
}
const styles = StyleSheet.create({
  button: {
    fontSize: 34,
    color: 'grey',
  },
})
export default Navbar
