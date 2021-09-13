import styled from 'styled-components';
import { Button } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const YesButton = styled(Button)`
  align-self: center;
  min-width: 15ch;
  max-width: 5rem;
  background-color: ${theme.color.accent};
  padding: 0.5rem 0.75rem;
  font-weight: 700;
  margin: 1rem 1rem 0 1rem;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 2px 1px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const NoButton = styled(Button)`
  align-self: center;
  min-width: 15ch;
  max-width: 5rem;
  background-color: ${theme.color.accent};
  padding: 0.5rem 0.75rem;
  font-weight: 700;
  margin: 1rem 1rem 0 1rem;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 2px 1px;
  }

  &:hover {
    opacity: 0.5;
  }
`;
