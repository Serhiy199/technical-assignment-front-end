import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getAllRecipes } from '../../shared/api/api';
import '../../index.css';
import css from './HomePage.module.css';
import { recipeProps } from '../../types/types';
import CardRecipe from '../../components/CardRecipe/CardRecipe';
import Loading from '../../components/Loader/Loader';

export default function HomePage() {
    const { data, error, isPending } = useQuery<recipeProps[], boolean | null>({
        queryKey: ['recipes'],
        queryFn: getAllRecipes,
        // select: data => data,
    });
    // console.log(error);
    console.log(isPending);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage: number = 12; // Скільки елементів на сторінці

    const startIndex = (currentPage - 1) * itemsPerPage;
    // const paginatedMeals: recipeProps[] = data.slice(startIndex, startIndex + itemsPerPage);
    const paginatedRecipes: recipeProps[] = data
        ? data.slice(startIndex, startIndex + itemsPerPage)
        : [];

    if (isPending) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="section">
            <h1 className="sectionTitle">Рецепти на Ваш смак</h1>

            <div className="container">
                {/* <div className={css.search}>
                    <Search placeholder="Search for products..." />
                </div> */}
                <ul className={css.wrapper}>
                    {paginatedRecipes.map((list: recipeProps) => {
                        return <CardRecipe key={list.idMeal} listRecipe={list} />;
                    })}
                </ul>
                {/* <ServerPagination totalPages={totalPage} /> */}
            </div>
        </section>
    );
}
