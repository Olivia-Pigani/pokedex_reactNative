import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PokemonDetails({route}) {
  const {pokemonId} = route.params
  const dispatch = useDispatch()
  const selectedPokemon = useSelector(state=>state.pokemons.selectedPokemon)

useEffect(()=>{
  dispatch(fetchPokemonById({id:pokemonId}))
},[pokemonId])


  return (
    <View>
      <Text>{selectedPokemon.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})