import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function Home({navigation}) {

const goToAllPokemons = () => {
navigation.navigate("AllPokemons")

}


  return (
    <Pressable onPress={goToAllPokemons}>
      <View>
        <Text style={styles.toBlack}>Pokémons</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toBlack:{
    color:"black"
  }
})

