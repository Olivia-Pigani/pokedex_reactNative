import {ScrollView,StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedPokemon, catchPokemon,releasePokemon} from '../slices/pokeSlice';
import EvolutionChain from '../components/EvolutionChain.js';





export default function PokemonDetails({route}) {
  const {pokemonId} = route.params;
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon);
  const pokedex = useSelector(state => state.pokemons.pokedex);
  const isCaught = pokedex.includes(pokemonId);



  const handleCatchRelease = () => {
    if (isCaught) {
      dispatch(releasePokemon(pokemonId));
    } else {
      dispatch(catchPokemon(pokemonId));
    }
  };


  useEffect(() => {
    dispatch(setSelectedPokemon(pokemonId));
  }, [pokemonId, dispatch]);

  return (
    <ScrollView>
    {selectedPokemon ? (
      <>
        <View style={[styles.topPartContainer]}>
          <Text style={styles.pokemonTitle}>{selectedPokemon.name}</Text>
          <Image
            style={styles.imageStyle}
            source={{ uri: selectedPokemon.defaultImage }}
          />
        </View>

        <View>
          <Text style={styles.detailTitle}>Détails</Text>
          <Text style={styles.toBlack}>
            {selectedPokemon.description}
          </Text>
        </View>

        <View style={styles.heightAndWeight}>
          <View >
            <Text style={styles.toBlack}>Height</Text>
            <Text style={styles.toBlack}>{selectedPokemon.height}</Text>
          </View>
          <View>
            <Text style={styles.toBlack}>Weight</Text>
            <Text style={styles.toBlack}>{selectedPokemon.weight}</Text>
          </View>
        </View>

        <EvolutionChain evolutions={selectedPokemon.evolutions} />
        <Button 
  title={isCaught ? "release" : "catch"} 
  onPress={handleCatchRelease}
/>
      </>
    ) : (
      <Text style={styles.toBlack}>Downloading...</Text>
    )}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  pokemonTitle:{
    fontSize:35,
    color:'white',
    backgroundColor:'#7851A9',
    marginTop : 25,
    paddingHorizontal : 10,
    borderRadius: 10,
    
  },
  toBlack: {
    color: 'black',
    padding : 5
  },
  imageStyle: {
    width: 200,
    height: 150,
    marginTop : 25
  },
  topPartContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 20,
    marginLeft: 10,
    margin : 25,
    color:'black',
    fontWeight: 'bold'
  },
  heightAndWeight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    color:'black',
    margin: 10,

  },
  chaineEvolutionTitle: {
    marginLeft: 10,
    marginTop: 30,
    fontSize: 25,
  },  poisonBackground: {
    backgroundColor: 'green',
  }
});
