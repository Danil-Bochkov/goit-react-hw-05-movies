import { Link, useLocation } from 'react-router-dom';
import { IMG } from '../API';

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
            <img
              className="trendList__pic"
              src={movie?.poster_path && IMG(movie?.poster_path, 200)}
              alt={movie?.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
