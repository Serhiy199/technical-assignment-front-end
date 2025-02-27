import { useQuery } from '@tanstack/react-query';
import { getRecipeId } from '../../shared/api/api';
import { useParams } from 'react-router-dom';

export default function RecipeDetailsPage() {
    const { recipeId } = useParams();
    console.log(recipeId);

    // const location = useLocation();

    const { data, error, isPending } = useQuery({
        queryKey: ['detalRecipe'],
        queryFn: getRecipeId(recipeId),
        select: data => data,
    });
    // console.log(data);

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <div>RecipeDetailsPage</div>;
}
