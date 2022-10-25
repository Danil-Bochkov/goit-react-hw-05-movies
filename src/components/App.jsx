import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Cast from './Cast';
import Review from './Review';

import route from 'utils/route';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path={route.home} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={route.movies} element={<Movies />} />
        <Route path={route.moviesId} element={<MoviesDetails />}>
          <Route path={route.cast} element={<Cast />} />
          <Route path={route.reviews} element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
