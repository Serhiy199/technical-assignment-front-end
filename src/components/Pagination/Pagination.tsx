import css from './Pagination.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import { recipeProps } from '../../types/types';
import ArrowLeftIcon from '../../../public/ArrowLeftIcon';
import ArrowRightIcon from '../../../public/ArrowRightIcon';
import { generatePagination } from '../../shared/utils';

export default function Pagination({ listData }: { listData: recipeProps[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage: number = 12; // Скільки елементів на сторінці

    const startIndex = (currentPage - 1) * itemsPerPage;

    const paginatedRecipes: recipeProps[] = listData
        ? listData.slice(startIndex, startIndex + itemsPerPage)
        : [];
    const totalPages = Math.ceil(listData.length / itemsPerPage);
    const allPages = generatePagination(currentPage, totalPages);

    return (
        <>
            <div className={css.container}>
                <button
                    title="Prev Page"
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                >
                    <ArrowLeftIcon className={css.arrowIcon} />
                </button>
                <div className={css.list}>
                    {allPages.map((page, index) => {
                        let position: 'first' | 'second' | 'single' | 'middle' | 'last' | undefined;

                        if (index === 0) position = 'first';
                        if (paginatedRecipes.length === 2) position = 'second';
                        if (paginatedRecipes.length === 1) position = 'single';
                        if (page === '...') position = 'middle';
                        if (index === paginatedRecipes.length - 1) position = 'last';

                        return (
                            <PaginationNumber
                                key={page}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <button
                    type="button"
                    title="Next Page"
                    disabled={startIndex + itemsPerPage >= allPages.length}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                >
                    <ArrowRightIcon className={css.arrowIcon} />
                </button>
            </div>
        </>
    );
}

function PaginationNumber({
    page,

    isActive,
    position,
}: {
    page: number | string;

    position?: 'first' | 'second' | 'middle' | 'single' | 'last';
    isActive: boolean;
}) {
    const numberClass = clsx(css.listNumber, {
        [css.first]: position === 'first' || position === 'single',
        [css.second]: position === 'second' || position === 'single',
        [css.last]: position === 'last' || position === 'single',
        [css.active]: isActive,
        [css.hover]: !isActive && position !== 'middle',
        [css.middle]: position === 'middle',
    });

    return isActive || position === 'middle' ? (
        <div className={numberClass}>{page}</div>
    ) : (
        <button type="button" className={numberClass}>
            {page}
        </button>
    );
}
