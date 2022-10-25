import { useState, useEffect } from 'react';
import { getMovieCredits, IMG } from 'API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieCredits(id)
      .then(response => setCast(response.data.cast))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : cast.length ? (
        <ul className="cast">
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id} className="castItem">
                <img
                  className="castItem__image"
                  src={profile_path && IMG(profile_path, 200)}
                  alt={name}
                />
                {name}
                <span>
                  Character: <b>{character}</b>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No cast available</p>
      )}
    </section>
  );
};

export default Cast;
