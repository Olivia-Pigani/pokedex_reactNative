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
      style={styles.listContainer}
      renderItem={({ item }) => {
        const pokemonDetails = getPokemonDetails(item);
        return (
          <View style={styles.card}>
            <Text style={styles.pokemonName}>{pokemonDetails.name}</Text>
            <Image
  source={{ uri: pokemonDetails.defaultImage }}
  style={styles.imageStyle} 
/>
            <TouchableOpacity style={styles.releaseButton}  onPress={() => dispatch(releasePokemon(item))}>
              <Text>Release</Text>
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
      },imageStyle: {
        width: 100, 
        height: 100, 
      },
      listContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
      },card: {
        backgroundColor: '#f8f8f8',
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
      },
      releaseButton: {
        backgroundColor: '#7851A9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
      },
      pokemonName: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },


})