export const generatePagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 10) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage < 8) {
        return [1, 2, 3, 4, 5, 6, 7, '...', totalPages];
    }

    if (currentPage >= totalPages - 4) {
        return [
            1,
            '...',
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
        ];
    } else {
        return [
            1,
            '...',
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            '...',
            totalPages,
        ];
    }
};
