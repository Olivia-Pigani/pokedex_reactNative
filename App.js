import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllPokemons from './screen/AllPokemons';
import PokemonDetails from './screen/PokemonDetails';
import Pokedex from './screen/Pokedex';
import Home from './screen/Home';
import { Provider } from 'react-redux';
import store from './store';


const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer >

<Stack.Navigator initialRouteName="Home">

<Stack.Screen name='AllPokemons' component={AllPokemons} options={{title : "All pokemons"}}/>
<Stack.Screen name='PokemonDetails' component={PokemonDetails} options={{title : "PokemonDetails"}}/>
<Stack.Screen name='Pokedex' component={Pokedex} options={{title : "Pokedex"}}/>

 <Stack.Screen name='Home' component={Home} options={{title : "Home"}}/>

</Stack.Navigator>



    </NavigationContainer >
    </Provider>

  )
}

const styles = StyleSheet.create({})