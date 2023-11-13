import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// GET ALL
// ...other imports
export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
      const data = await response.json();
      const pokemonDetailsPromises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();
        return {
          name: pokemonDetails.name,
          types: pokemonDetails.types.map((type) => type.type.name), 
        };
      });
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      return pokemonDetails;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);



// GET BY ID
export const fetchPokemonById = createAsyncThunk(
  'pokemons/fetchRecipesById',
  async selectedPokemon => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedPokemon),
        },
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch {
      console.log(error);
    }
  },
);

const pokeSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    selectedPokemon: null,
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      console.log(state.pokemons);
    }),
      builder.addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.selectedPokemon = action.payload;
      });
  },
});
export const {setPokemons, setSelectedPokemon} = pokeSlice.actions;
export default pokeSlice.reducer;
