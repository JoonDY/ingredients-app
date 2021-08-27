import styled from 'styled-components';
import { Input, Select } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const SearchInput = styled(Input)`
  &:focus {
    border-radius: 5px;
    border-bottom: 1px solid transparent;
  }
`;

export const SearchSelect = styled(Select)`
  padding: 0.1rem 0;
  margin: 0.5rem 0;
  border-bottom: 1px solid ${theme.color.gray};
  width: 30%;

  &:focus {
    border-radius: 5px;
    border-bottom: 1px solid transparent;
  }
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
