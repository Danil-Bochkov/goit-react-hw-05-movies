import { getMovies } from '../API';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import route from 'utils/route';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(response => setMovies(response.data.results));
  }, []);
  return (
    <main>
      <ul className="trendList">
        {movies.map(({ title, id }) => (
          <li className="trendList__item" key={id}>
            <Link state={{ from: route.home }} to={`${route.movies}/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
