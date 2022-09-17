import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import users from '../assets/data/users'


const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: 'purple'}}>New Astromatches</Text>
        <ScrollView style={styles.users} horizontal={true}>
          {users.map(user => (
            <View key={user.id} style={styles.user}>
              <Image source={{uri: user.image}} style={styles.image} />
            </View>
          ))}
        </ScrollView>
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
  },
  root: {
    width: '100%',
    flex: 1,
    padding: 10
  },
  container: {
    padding: 10
  },
  users: {
    flexDirection: 'row',
  },
  user: {
    width: 70,
    margin: 3,
    height: 70,
    borderWidth: 3,
    padding: 2,
    borderRadius: 50,
    borderColor: 'purple'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '100%'
  },
})

export default MatchesScreen
