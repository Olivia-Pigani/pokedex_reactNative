import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function Accueil({navigation}) {

const goToAllPokemons = () => {
navigation.navigate("AllPokemons")

}


  return (
    <Pressable onPress={goToAllPokemons}>
      <View>
        <Text>Pokémons</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
