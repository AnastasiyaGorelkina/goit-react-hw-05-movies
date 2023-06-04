import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import('pages/HomePages/Home'));
const Movies = lazy(() => import('pages/MoviesPages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
      </Routes>
      </Suspense>
  );
};


