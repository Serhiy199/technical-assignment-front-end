// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import { Link, useLocation } from 'react-router-dom';
// import Button from '../button/button';
import { recipeProps } from '../../types/types';
// import clsx from 'clsx';
import css from '../CardRecipe/CardRecipe.module.css';

// function truncateText(text: string, wordLimit: number): string {
//     const words = text.split(' '); // Розділяємо текст на слова
//     if (words.length > wordLimit) {
//         return words.slice(0, wordLimit).join(' ') + '...'; // Залишаємо тільки перші `wordLimit` слів
//     }
//     return text; // Якщо текст не перевищує ліміт, повертаємо його повністю
// }

export default function CardProducts({
    listRecipe,
}: // getRequest,
{
    listRecipe: recipeProps;
    // getRequest?: string;
}): React.ReactNode {
    // const galleryImage: string = listProducts.images[0];
    const location = useLocation();

    return (
        <li className={css.item}>
            <Link className={css.card} to={`/recipe/${listRecipe.idMeal}`} state={location}>
                <div className={css.poster}>
                    <img
                        className={css.img}
                        src={listRecipe.strMealThumb ?? undefined}
                        alt={listRecipe.title ?? ''}
                    />
                </div>

                <div className={css.itemSection}>
                    <div className={css.imgTextTitle}>
                        <h2 className={css.productTitle}>{listRecipe.strMeal}</h2>
                        <button type="button" className={css.btn}>
                            🛒
                        </button>
                    </div>

                    <div className={css.priceText}>
                        <p className={css.text}>{listRecipe.strCategory}</p>
                        <p className={css.text}>Country: {listRecipe.strArea}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}
