import styled from 'styled-components';
import { Button } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const AddButton = styled(Button)`
  align-self: center;
  min-width: 10ch;
  max-width: 5rem;
  background-color: ${theme.color.accent};
  padding: 0.25rem 0.75rem;
  font-weight: 700;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 2px 1px;
  }
`;

export const AddIngredientButton = styled(Button)`
  width: 50%;
  margin: 0 auto;
  background-color: ${theme.color.white};
  font-weight: 900;
  color: ${theme.color.accent2};
  border-radius: 0;

  &:hover {
    border-bottom: 2px solid ${theme.color.accent};
  }
`;
