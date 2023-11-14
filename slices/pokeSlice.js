import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// GET ALL => faire tout les fetch ici

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50',
      );
      const data = await response.json();
      const secondFetch = data.results.map(async pokemon => {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();

        const speciesResponse = await fetch(pokemonDetails.species.url);
        const speciesDetails = await speciesResponse.json();
        const flavorTextEntry = speciesDetails.flavor_text_entries.find(entry => entry.language.name === 'en');
        const flavorText = flavorTextEntry ? flavorTextEntry.flavor_text.replace(/[\n\f]/g, ' ') : '';
        return {
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          height: pokemonDetails.height,
          weight: pokemonDetails.weight,
          types: pokemonDetails.types.map(type => type.type.name),
          sprites: pokemonDetails.sprites,
          description: flavorText,

        };
      });
      const pokemonDetails = await Promise.all(secondFetch);
      return pokemonDetails;
    } catch (error) {
      console.error(error);
      throw error;
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
      const selectedId = action.payload;
      state.selectedPokemon = state.pokemons.find(
        pokemon => pokemon.id === selectedId,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
    });
  },
});
export const {setPokemons, setSelectedPokemon} = pokeSlice.actions;
export default pokeSlice.reducer;
