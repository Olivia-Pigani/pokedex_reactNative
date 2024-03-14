import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// GET ALL => do all fetches here

async function fetchEvolutionDetails(evolutionChainUrl) {
  const response = await fetch(evolutionChainUrl);
  const evolutionChainDetails = await response.json();
  let evolutions = [];
  let currentStage = evolutionChainDetails.chain;

  while (currentStage && currentStage.evolves_to.length > 0) {
    const nextEvolution = currentStage.evolves_to[0]; 
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextEvolution.species.name}`);
    const pokemonDetails = await pokemonResponse.json();

    evolutions.push({
      name: nextEvolution.species.name,
      sprite: pokemonDetails.sprites.front_default
    });

    currentStage = nextEvolution; 
  }

  return evolutions;
}



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

        const evolutions = await fetchEvolutionDetails(speciesDetails.evolution_chain.url);


        return {
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          height: pokemonDetails.height,
          weight: pokemonDetails.weight,
          types: pokemonDetails.types.map(type => type.type.name),
          defaultImage: pokemonDetails.sprites.front_default,
          description: flavorText,
          evolutions: evolutions
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
    pokedex :[],
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
    catchPokemon: (state, action) => {
      const pokemonId = action.payload;
      if (!state.pokedex.includes(pokemonId)) {
        state.pokedex.push(pokemonId);
      }
    },
    releasePokemon: (state, action) => {
      const pokemonId = action.payload;
      state.pokedex = state.pokedex.filter(id => id !== pokemonId);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
    });
  },
});
export const {setPokemons, setSelectedPokemon, catchPokemon, releasePokemon} = pokeSlice.actions;
export default pokeSlice.reducer;
