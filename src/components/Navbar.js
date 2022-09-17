import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = () => {
  return (
      <View style={{width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection:'row', paddingHorizontal: 30, paddingVertical: 10}}>
        <Pressable>
          <Ionicons name="md-home-sharp" size={40} />
        </Pressable>
        <Pressable>
          <Ionicons name="ios-planet" size={40} />
        </Pressable>
        <Pressable >
          <Ionicons name="chatbubble-ellipses"  size={40} />
        </Pressable>
        <Pressable>
          <FontAwesome name="user"  size={40} />
        </Pressable>
      </View>
  )
}

export default Navbar
