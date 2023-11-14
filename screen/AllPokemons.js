import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemons} from '../slices/pokeSlice';
import PokemonSummary from '../components/PokemonSummary.js';

export default function AllPokemons({navigation, route}) {
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const seeDetails = (pokemonId) => {
    navigation.navigate('PokemonDetails', {pokemonId});
  };

  return (
    <View style={styles.allPokemonsSquares}>
      <FlatList
        style={styles.toBlack}
        numColumns={2}
        data={pokemons}
        renderItem={({item}) => (
          <PokemonSummary
          
            item={item}
            seeDetails={() => seeDetails(item.id)}
            pokemonId={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toBlack: {
    color: 'black',
  },
  allPokemonsSquares:{
    alignItems:"center",
    

  }
});
