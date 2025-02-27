import { useQuery } from '@tanstack/react-query';
import { getAllRecipe } from '../../shared/api/api';
import '../../index.css';
import css from './HomePage.module.css';
import { recipeProps } from '../../types/types';
import CardRecipe from '../../components/CardRecipe/CardRecipe';

export default function HomePage() {
    const { data, error, isPending } = useQuery({ queryKey: ['posts'], queryFn: getAllRecipe });

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
            <h1 className="sectionTitle">Рецепти на Ваш смак</h1>
            <div className="container">
                {/* <div className={css.search}>
                    <Search placeholder="Search for products..." />
                </div> */}
                <ul className={css.wrapper}>
                    {data.map((list: recipeProps) => {
                        return <CardRecipe key={list.idMeal} listRecipe={list} />;
                    })}
                </ul>
                {/* <ServerPagination totalPages={totalPage} /> */}
            </div>
        </>
    );
}
