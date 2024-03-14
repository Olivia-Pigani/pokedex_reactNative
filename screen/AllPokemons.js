// Dans AllPokemons.js
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../slices/pokeSlice';
import PokemonSummary from '../components/PokemonSummary';

export default function AllPokemons({ navigation }) {
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const seeDetails = (pokemonId) => {
    navigation.navigate('PokemonDetails', { pokemonId });
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => (

          <PokemonSummary
            pokemon={item}
            onPress={() => seeDetails(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});
