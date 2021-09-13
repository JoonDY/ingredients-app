import styled from 'styled-components';
import { Button } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const AddButton = styled(Button)`
  align-self: center;
  min-width: 15ch;
  max-width: 5rem;
  background-color: ${theme.color.accent};
  padding: 0.5rem 0.75rem;
  font-weight: 700;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 2px 1px;
  }
`;

export const AddIngredientButton = styled(Button)`
  vertical-align: center;
  background-color: ${theme.color.accent};
  font-weight: 900;
  color: ${theme.color.dark};
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.1s ease-in-out;
  position: fixed;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 10px;
  right: 10px;
  z-index: 10;

  &:hover {
    border: 2px solid ${theme.color.accent};
    background-color: ${theme.color.white};
    transform: scale(1.01);
  }

  @media (min-width: 750px) {
    font-size: 0.6rem;
    position: static;
    height: auto;
    padding: 0.25rem 0;
    width: 20ch;
    margin: 0 auto;
    border-radius: 25px;
  } ;
`;
