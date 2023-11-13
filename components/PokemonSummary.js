import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PokemonSummary({item}) {
  return (
    <View>
    
      <Text style={styles.toBlack}>{item.name}</Text>
      <Text style={styles.toBlack}>fdfgdg</Text>
   
  </View>
  )
}

const styles = StyleSheet.create({
  toBlack:{
    color:"black"
  }
})