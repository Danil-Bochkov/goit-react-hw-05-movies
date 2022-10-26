import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';

const SearchBox = ({ onSubmit }) => {
  const [formData, setFormData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (formData === '') return;

    onSubmit(formData);
    setFormData('');
  };

  const handleSearch = evt => {
    setFormData(evt.currentTarget.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        onChange={handleSearch}
        type="text"
        value={formData}
        placeholder="Search movies"
      />
      <button type="submit" className="search__button">
        <BiSearch />
      </button>
    </form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
