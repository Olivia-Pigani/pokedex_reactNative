import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllPokemons from './screen/AllPokemons';
import PokemonDetails from './screen/PokemonDetails';
import Accueil from './screen/Accueil';
import { Provider } from 'react-redux';
import store from './store';


const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer >

<Stack.Navigator initialRouteName="Accueil">

<Stack.Screen name='AllPokemons' component={AllPokemons} options={{title : " All pokemons"}}/>
<Stack.Screen name='PokemonDetails' component={PokemonDetails} options={{title : " PokemonDetails"}}/>
<Stack.Screen name='Accueil' component={Accueil} options={{title : " Accueil"}}/>

</Stack.Navigator>



    </NavigationContainer >
    </Provider>

  )
}

const styles = StyleSheet.create({})