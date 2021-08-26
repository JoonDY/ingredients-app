import styled from 'styled-components';
import { Input, Select } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const SearchInput = styled(Input)`
  width: 100%;
`;

export const SearchSelect = styled(Select)`
  padding: 0.1rem 0.25rem;
  margin: 0.5rem 0.1rem;
  border-radius: 5px;
  border: 1px solid ${theme.color.dark};
  width: 50%;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
