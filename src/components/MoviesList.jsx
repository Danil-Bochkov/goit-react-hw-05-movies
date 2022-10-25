import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies, movieName }) => {
  const location = useLocation();

  return (
    <ul className="moviesList">
      {movies.map(movie => (
        <li className="moviesList__item" key={movie?.id}>
          <Link
            to={`${movie?.id}`}
            state={{ from: `${location.pathname}?name=${movieName}` }}
          >
            {movie?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
