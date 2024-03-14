import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { releasePokemon } from '../slices/pokeSlice';

const Pokedex = () => {
  const pokedex = useSelector(state => state.pokemons.pokedex);
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const dispatch = useDispatch();

  const getPokemonDetails = (pokemonId) => {
    return pokemons.find(pokemon => pokemon.id === pokemonId);
  };

  return (
    <FlatList
      data={pokedex}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => {
        const pokemonDetails = getPokemonDetails(item);
        return (
          <View>
            <Text style={styles.toBlack}>{pokemonDetails.name}</Text>
            <Image
            source={{ uri: pokemonDetails.defaultImage }}
          />
            <TouchableOpacity onPress={() => dispatch(releasePokemon(item))}>
              <Text style={styles.toBlack}>Release</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default Pokedex;


const styles = StyleSheet.create({

    toBlack: {
        color: 'black',
        padding : 5
      }


})