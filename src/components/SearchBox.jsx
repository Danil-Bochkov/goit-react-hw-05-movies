import { HiSearch } from 'react-icons/hi';
import styled from 'styled-components';

const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
`;

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {/* <Icon /> */}
    </div>
  );
};
