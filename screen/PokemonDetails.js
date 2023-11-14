import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedPokemon} from '../slices/pokeSlice';

export default function PokemonDetails({route, navigation}) {
  const {pokemonId} = route.params;
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon);

  useEffect(() => {
    dispatch(setSelectedPokemon(pokemonId));
  }, [pokemonId, dispatch]);

  return (
    <View>
      {selectedPokemon ? (
      <>

        <View style={[styles.toBlack,styles.topPartContainer]}>
        <Text style={styles.toBlack}>{selectedPokemon.name}</Text>
        <Image
          style={[styles.imageStyle, styles.toBlack]}
          source={{uri: selectedPokemon.sprites?.front_default}}
        />
      </View>

      <View>
        <Text style={styles.detailTitle} >Détails</Text>
        <Text style={[styles.toBlack,styles.detailContent]}>{selectedPokemon.description}</Text>
        </View>



        <View style={styles.heightAndWeight}>
          <View>
        <Text style={styles.detailTitle} >Height</Text>
          <Text style={styles.toBlack}>{selectedPokemon.height}</Text>
          </View>
          <View>
        <Text style={styles.detailTitle} >Weight</Text>
          <Text style={styles.toBlack}>{selectedPokemon.weight}</Text>
          </View>
        </View>

        <Text style={styles.chaineEvolutionTitle} >Chaîne d'évolutions</Text>
        





      </>
    ) : (
      <Text>en charge ...</Text> 
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  toBlack: {
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 250,
    height: 150,
  },
  topPartContainer:{
    backgroundColor:"yellow",
    height:200,
    justifyContent:"center",
    alignItems:"center"
  },
  detailTitle:{
    fontSize:25,
    marginLeft:10

  },
  detailContent:{
   justifyContent:"flex-start",
   width:100,
   marginTop:20,
   marginBottom:20,
   marginLeft:10,
   textAlign:"left"
  },
  heightAndWeight:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  chaineEvolutionTitle:{
    marginLeft:10,
    marginTop:30,
    fontSize:25,
    
  }
});
