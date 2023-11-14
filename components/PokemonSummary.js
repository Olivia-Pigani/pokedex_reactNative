import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function PokemonSummary({item, seeDetails}) {
  const isPoison = item.types.includes('poison');
  const isFlying = item.types.includes('flying');
  const isWater = item.types.includes('water');
  const isFire = item.types.includes('fire');

  return (
    <Pressable onPress={() => seeDetails}>
      <View
        style={[
          styles.squareContainer,
          isFire && styles.fireBackground,
          isFlying && styles.flyingBackground,
          isPoison && styles.poisonBackground,
          isWater && styles.waterBackground,
        ]}>
        <Image
          style={[styles.imageStyle, styles.toBlack]}
          source={{uri: item.sprites?.front_default}}
        />
        <Text style={styles.toBlack}>{item.name}</Text>

        {item.types.map((type, index) => (
          <Text key={index} style={styles.toBlack}>
            {type}
          </Text>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toBlack: {
    color: 'black',
    textAlign: 'center',
  },
  squareContainer: {
    backgroundColor: 'orange',
    width: 180,
    height: 180,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  poisonBackground: {
    backgroundColor: 'green',
  },
  flyingBackground: {
    backgroundColor: 'cyan',
  },
  fireBackground: {
    backgroundColor: 'red',
  },
  waterBackground: {
    backgroundColor: 'blue',
  },
});
