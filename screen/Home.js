import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function Home({navigation}) {

const goToAllPokemons = () => {
navigation.navigate("AllPokemons");
};

const goToPokedex = () => {
  navigation.navigate("Pokedex");

};


  return (
<View style={styles.container}>
      <Pressable onPress={goToAllPokemons} style={styles.buttonA}>
        <Text style={styles.buttonText}>Catch them all !</Text>
      </Pressable>
      <Pressable onPress={goToPokedex} style={styles.buttonB}>
        <Text style={styles.buttonText}>Pokedex</Text>
      </Pressable>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    gap:10
  },
  buttonA: {
    backgroundColor: '#ff3b30',
    padding: 20,
    borderRadius: 5,
  },
  buttonB: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
})

