import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./slices/pokeSlice";

export default configureStore({
    reducer:{
        pokemons:pokeSlice
    }
})