import React from 'react';
import {Text, ImageBackground, View, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import users from '../../../assets/data/users';
import Swiper from 'react-native-deck-swiper';

const Card = (props) => {
  return (
    <SafeAreaView styles={{flex: 1}}>
    <View style={styles.cardContainer}>
      <View>
        <Swiper
          containerStyle={{backgroundColor: 'transparent'}}
          cards={users}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={true}
          onSwipedLeft={()=>{
            console.log('Swiped PASS');
          }}
          onSwipedRight={() => {
            console.log('Swiped MATCH');
          }}
          backgroundColor={'purple'}
          overlayLabels={{
            left: {
              title: 'NOPE',
                style: {
                  label: {
                    textAlign: 'right',
                    color: 'red',
                  }
                }
              },
            right:{
              title: 'LIKE',
                style: {
                  label: {
                    textAlign: 'left',
                    color: 'green',
                  }
                }
              },
          }}
          renderCard={(card) => (
            <View key={card.id}  >
              <ImageBackground  source={{ uri: card.image}} style={styles.image}>
                 <View style={styles.cardInner} >
                 <Pressable
                //  onPress={Fonction pour aller sur le profil}
                 style={styles.matchScore}>
                    <Text style={{color: 'white', fontSize: 40}}>50</Text>
                  </Pressable>

                  <Text style={styles.name}>{card.name}</Text>
                  <Text style={styles.bio}>{card.bio}</Text>
                </View>
              </ImageBackground>
            </View>
          )
        }/>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginTop: 0,
  },
  animatedCard: {
    paddingHorizontal: '1%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '20%',
    overflow: 'hidden',
    justifyContent: 'flex-end',

  },
  cardInner: {
    padding: 20,
  },
  matchScore:{
    position: 'absolute',
    padding: 5,
    bottom: 410,
    right: 14,
    borderRadius: 30,
    backgroundColor: 'purple',
    height: 60,
    width: 60,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;
