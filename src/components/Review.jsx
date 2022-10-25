import { useState, useEffect } from 'react';
import { getMovieReviews } from 'API';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(id)
      .then(response => setUsers(response.data.results))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : users.length ? (
        <ul className="review">
          {users?.map(({ author, content, id }) => {
            return (
              <li className="review__item" key={id}>
                <h2 className="review__author">Author: {author}</h2>
                <p className="review__text">{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </section>
  );
};

export default Reviews;
