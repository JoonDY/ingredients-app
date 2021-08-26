import styled from 'styled-components';
import { Button } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const AddButton = styled(Button)`
  margin-top: 1rem;
  align-self: center;
  min-width: 15ch;
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
  width: 20ch;
  margin: 1rem auto;
  padding: 0.25rem 0;
  background-color: ${theme.color.accent};
  font-weight: 900;
  color: ${theme.color.dark};
  border-radius: 25px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${theme.color.accent};
    background-color: ${theme.color.white};
  }
`;
