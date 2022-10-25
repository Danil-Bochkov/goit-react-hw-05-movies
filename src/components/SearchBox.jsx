export const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
