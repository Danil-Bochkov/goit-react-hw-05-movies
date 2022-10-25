import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { getMovieDetails, IMG } from '../API';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Loader from 'components/Loader';

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

  console.log(location.state);

  return (
    <main className='container'>
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
              <h2 className="movieInfo__title">{movie?.title}</h2>
              <span className="movieInfo__rating">
                User Score {Math.round(movie?.vote_average * 10)}%
              </span>
              <h3 className="movieInfo__title-information">Overview</h3>
              <p className="movieInfo__overview">{movie?.overview}</p>
              <h4 className="movieInfo__title-information">Genres</h4>
              <div className="movieInfo__genre">
                {movie?.genres.map(genre => {
                  return <span key={genre.id}>{genre.name}</span>;
                })}
              </div>
            </div>
          </div>

          <div className="additionalInfo">
            <span className="additionalInfo__title">
              Additional information
            </span>
            <ul className="listOfLinks">
              <li className="listOfLinks__item">
                <Link to="cast">Cast</Link>
              </li>
              <li className="listOfLinks__item">
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </Fragment>
      )}
    </main>
  );
};

export default MoviesDetails;
