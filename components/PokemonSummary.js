import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonSummary = ({ pokemon, onPress }) => {

  console.log(pokemon);


  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: pokemon.defaultImage }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>

      <View style={styles.typesContainer}>
        {pokemon.types.map((type, index) => (
          <View key={index} style={[styles.typeBadge, { backgroundColor: getRightColor(type) }]}>
            <Text style={styles.typeText}>{type}</Text>
          </View>
        ))}
      </View>


    </TouchableOpacity>
  );
};

const getRightColor = (type) => {
  switch (type) {
    case 'fire': return '#F7786B';
    case 'water': return '#77C4FE';
    case 'grass': return '#4FC1A6';
    case 'electric': return '#FFCE4B';
    case 'psychic': return '#FA92B2';
    case 'ice': return '#8BCEEB';
    case 'dragon': return '#F16E57';
    case 'dark': return '#707070';
    case 'fairy': return '#FDB9E9';
    case 'normal': return '#A0A29F';
    case 'bug': return '#A8B820';
    case 'poison': return '#A040A0';
    case 'ground': return '#E0C068';
    case 'flying': return '#A890F0';
    case 'fighting': return '#C03028';
    case 'rock': return '#B8A038';
    case 'steel': return '#B8B8D0';
    case 'ghost': return '#705898';
    default: return '#A8A878';
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 2,
    backgroundColor: '#68A090',
  },
  typeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  }
});

export default PokemonSummary;
