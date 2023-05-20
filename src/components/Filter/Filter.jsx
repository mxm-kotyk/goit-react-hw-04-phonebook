import PropTypes from 'prop-types';
import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
  SearchIcon,
} from './Filter.styled';
import sprite from '../../img/sprite.svg';

const searchIcon = `${sprite}#icon-search`;

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={onChange}
        value={filter}
        name="filter"
        placeholder="Search"
        id="filter"
      />
      <SearchIcon width="32" height="32">
        <use href={searchIcon}></use>
      </SearchIcon>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
