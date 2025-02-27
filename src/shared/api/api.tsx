import axios from 'axios';
import { recipeProps } from '../../types/types';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

export async function getAllRecipes(): Promise<recipeProps[]> {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const allRecipes = [] as recipeProps[];

    for (const letter of letters) {
        const response = await axios.get(`/search.php?f=${letter}`);

        if (response.data.meals) {
            allRecipes.push(...response.data.meals);
        }
    }
    // console.log(allRecipes);
    return allRecipes;
}

export async function getRecipeId(id: string) {
    const response = await axios.get(`/lookup.php?i=${id}`);
    return response.data;
}
