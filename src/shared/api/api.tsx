import axios from 'axios';
import { recipeProps } from '../../types/types';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

export async function getAllRecipe(): Promise<recipeProps[]> {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const allRecipes = [] as recipeProps[];

    for (const letter of letters) {
        const response = await axios.get(`/search.php?f=${letter}`);

        if (response.data.meals) {
            allRecipes.push(...response.data.meals);
        }
    }
    console.log(allRecipes);
    return allRecipes;
}

// const response = await axios.get('/categories.php');
// // const responseTwo = await axios.get(`/search.php?f=${letter}`);

// const categoryData: categoryDataProps = response.data;

// let allRecipe = [] as recipe[];

// for (const category of categoryData.categories) {
//     const allRecipeUrl: string = `/filter.php?c=${category.strCategory}`;

//     const recipeResponse = await axios.get(allRecipeUrl);

//     const recipeData: recipeDataProps = await recipeResponse.data;

//     allRecipe = allRecipe.concat(recipeData.meals);
// }
// // console.log(allRecipe);

// let allDetailInfoRecipe = [] as allDetailInfoRecipeProps[];

// for (const recipe of allRecipe) {
//     const detailInfoRecipeUrl: string = `/lookup.php?i=${recipe.idMeal}`;

//     const allDetailInfoRecipeResponse = await axios.get(detailInfoRecipeUrl);
//     // console.log(allDetailInfoRecipe);

//     const allRecipeData: detailInfoProps = await allDetailInfoRecipeResponse.data;
//     // console.log(allRecipeData);

//     allDetailInfoRecipe = allDetailInfoRecipe.concat(allRecipeData.meals);
//     // console.log(allDetailInfoRecipe);
// }

// // console.log(allDetailInfoRecipe);
// return allDetailInfoRecipe;
// // console.log(allRecipe);

// // console.log(allMeals);
// }

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// return response.data;

// export async function CinemaId(id) {
//     const response = await axios.get(`/3/movie/${id}`, {
//         params: {
//             api_key: 'c1f281aaf67b34db8827af4edd54052b',
//         },
//     });
//     return response.data;
// }
