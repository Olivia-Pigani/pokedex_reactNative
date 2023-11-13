import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PokemonSummary({item}) {
  return (
    <Pressable>
    <View>
    
      <Text style={styles.toBlack}>{item.name}</Text>
      {item.types.map((type, index) => (
          <Text key={index} style={styles.toBlack}>{type}</Text>
        ))}   
   
  </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  toBlack:{
    color:"black"
  }
})