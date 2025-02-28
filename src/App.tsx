// import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shared/api/query-client';
import Loader from './components/Loader/Loader';
import Header from '../src/components/Header/Header';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RecipeDetailsPage = lazy(() => import('./pages/RecipeDetailsPage/RecipeDetailsPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/recipe/" element={<RecipeDetailsPage />} /> */}
                    <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
                    <Route path="/favorite" element={<FavoritePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
