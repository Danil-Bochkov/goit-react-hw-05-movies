import { useState, useEffect } from 'react';
import { getMovieCredits, IMG } from 'API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import unknownPerson from '../images/unknown-actor.png';

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
          {cast.map(({ name, profile_path, character }, id) => {
            return (
              <li key={id} className="castItem">
                {profile_path ? (
                  <img
                    className="castItem__image"
                    src={profile_path && IMG(profile_path, 200)}
                    alt={name}
                  />
                ) : (
                  <div className="castItem__image_unknown">
                    <img src={unknownPerson} alt={name} />
                  </div>
                )}
                <div className="castItem__info">
                  {name}
                  <span>
                    Character: <b>{character}</b>
                  </span>
                </div>
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
