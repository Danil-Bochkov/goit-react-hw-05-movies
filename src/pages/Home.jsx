import { getMovies, IMG } from '../API';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import route from 'utils/route';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(response => setMovies(response.data.results));
  }, []);
  return (
    <main className="container">
      <p className="label">Top movies of the week</p>
      <ul className="trendList">
        {movies.map(({ poster_path, title, id }) => (
          <li className="trendList__item" key={id}>
            <Link state={{ from: route.home }} to={`${route.movies}/${id}`}>
              <img
                className="trendList__pic"
                src={poster_path && IMG(poster_path, 200)}
                alt={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
