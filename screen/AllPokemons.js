import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { fetchPokemons } from '../slices/pokeSlice';
import PokemonSummary from '../components/PokemonSummary.js';


export default function AllPokemons() {

const pokemons = useSelector(state=>state.pokemons.pokemons)
const dispatch = useDispatch()

  useEffect(()=>{
dispatch(fetchPokemons())
  },[])




  return (
    <View>
      <FlatList style={styles.toBlack} numColumns={2}
      data={pokemons}
      renderItem={({item})=>
      <PokemonSummary item={item}/>
      } keyExtractor={(item)=>item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  toBlack:{
    color:"black"
  }
})
