import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EvolutionChain = ({ evolutions }) => {
  return (
    <View>
      <Text style={styles.title}>Evolution's chain</Text>
      {evolutions.map((evolution, index) => (
        <View key={index} style={styles.evolutionContainer}>
          <Text style={styles.evolutionName}>{evolution.name}</Text>
          <Image source={{ uri: evolution.sprite }} style={styles.evolutionImage} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor:'#7851A9',
    color:'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
    textAlign: 'center',
    
  },
  evolutionContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10
  },
  evolutionName: {
    color:'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  evolutionImage: {
    width: 150,
    height: 150
  },
});

export default EvolutionChain;
