import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';
import { getAllRecipes } from '../../shared/api/api';
import '../../index.css';
import css from './HomePage.module.css';
import { recipeProps } from '../../types/types';
import CardRecipe from '../../components/CardRecipe/CardRecipe';
import Loading from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';

export default function HomePage() {
    const { data, error, isLoading } = useQuery<recipeProps[], null>({
        queryKey: ['recipes'],
        queryFn: getAllRecipes,
        // select: data => data,
    });

    console.log(isLoading);
    // const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage: number = 12; // Скільки елементів на сторінці

    const startIndex = 0;
    // const paginatedMeals: recipeProps[] = data.slice(startIndex, startIndex + itemsPerPage);
    const paginatedRecipes: recipeProps[] = data
        ? data.slice(startIndex, startIndex + itemsPerPage)
        : [];

    if (isLoading) return <Loading />;
    if (error) return <div>Помилка завантаження: {error}</div>;

    return (
        <section className="section">
            <h1 className="sectionTitle">Рецепти на Ваш смак</h1>

            <div className="container">
                <ul className={css.wrapper}>
                    {paginatedRecipes.map((list: recipeProps) => {
                        return <CardRecipe key={list.idMeal} listRecipe={list} />;
                    })}
                </ul>
                <Pagination listData={data || []} />
            </div>
        </section>
    );
}
