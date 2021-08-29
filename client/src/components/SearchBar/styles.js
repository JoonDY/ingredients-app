import styled from 'styled-components';
import { Input, Select } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const SearchInput = styled(Input)`
  margin-bottom: 0.5rem;

  &:focus {
    border-radius: 5px;
    border-bottom: 1px solid transparent;
  }
`;

export const SearchSelect = styled(Select)`
  padding: 0.1rem 0;
  margin: 0.5rem 0;
  border-bottom: 1px solid ${theme.color.gray};
  width: 100%;

  &:focus {
    border-radius: 5px;
    border-bottom: 1px solid transparent;
  }

  @media (min-width: 650px) {
    width: 30%;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;

  @media (min-width: 650px) {
    width: 80%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`;
