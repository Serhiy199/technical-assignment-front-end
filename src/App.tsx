// import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shared/api/query-client';
import Loader from './components/Loader/Loader';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    {/* <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} /> */}
                    {/* <Route path="/favorite" element={<MovieDetailsPage />} /> */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
