import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../components/MoviesList';
import SearchBox from '../components/SearchBox';
import { searchMoviesByName } from '../API';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }
    setIsLoading(true);
    searchMoviesByName(movieName)
      .then(response => setMovies(response.data.results))
      .finally(() => setIsLoading(false));
  }, [movieName]);

  const handleSubmit = query => {
    setSearchParams({ name: query });
  };

  return (
    <main className="container">
      <SearchBox onSubmit={handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <MoviesList movies={movies} movieName={movieName} />
      )}
    </main>
  );
};

export default Movies;
