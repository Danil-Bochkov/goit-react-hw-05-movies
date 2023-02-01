import { useParams, useLocation, Link, Route, Routes } from 'react-router-dom';
import { getMovieDetails, IMG } from '../API';
import { useEffect, useState, Fragment, Suspense } from 'react';
import { BackLink } from '../components/BackLink';
import Loader from 'components/Loader';
import Cast from './Cast';
import Review from './Review';
import route from 'utils/route';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(id)
      .then(response => setMovie(response.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <BackLink to={backLinkHref}>Back to movies</BackLink>
          <div className="movieCard">
            <img
              className="movieCard__image"
              src={movie?.poster_path && IMG(movie?.poster_path, 300)}
              alt={movie?.name}
            />
            <div className="movieInfo">
              <div>
                <h2 className="movieInfo__title">{movie?.title}</h2>
                <span className="movieInfo__rating">
                  User Score {Math.round(movie?.vote_average * 10)}%
                </span>
              </div>
              <div>
                <h3 className="movieInfo__title-information">Overview</h3>
                <p className="movieInfo__overview">{movie?.overview}</p>
              </div>
              <div>
                <h4 className="movieInfo__title-information">Genres</h4>
                <div className="movieInfo__genre">
                  {movie?.genres.map(genre => {
                    return (
                      <span key={genre.id} className="movieInfo__genre_text">
                        {genre.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="additionalInfo">
            <span className="additionalInfo__title">
              Additional information
            </span>
            <ul className="listOfLinks">
              <li className="listOfLinks__item">
                <Link to="cast" state={{ from: location.state?.from }}>
                  Cast
                </Link>
              </li>
              <li className="listOfLinks__item">
                <Link to="reviews" state={{ from: location.state?.from }}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={route.cast} element={<Cast />} />
                <Route path={route.reviews} element={<Review />} />
              </Routes>
            </Suspense>
          </div>
        </Fragment>
      )}
    </main>
  );
};

export default MoviesDetails;
