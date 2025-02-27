import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipeSlice.js';
import recipeFilterReducer from './filtersSlice.js';

export const store = configureStore({
    reducer: {
        recipe: recipesReducer,
        filters: recipeFilterReducer,
    },
});
