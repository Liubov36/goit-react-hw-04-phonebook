import PropTypes from 'prop-types';
import { FindLabel, PromptFind, FindInput } from './Filter.styled.jsx';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <FindLabel>
      <PromptFind>Find contacts by name</PromptFind>
      <FindInput type="text" name="filter" value={filter} onChange={changeFilter} />
    </FindLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};