import styled from 'styled-components';
import { Table, THead, TH } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const Span = styled.span`
  position: absolute;
`;

export const IngredientTable = styled(Table)`
  margin: 1rem auto;
  width: 95%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;
`;

export const IngredientTHead = styled(THead)`
  background-color: ${theme.color.accent};
  display: none;

  @media (min-width: 750px) {
    display: revert;
  }
`;

export const IngredientTH = styled(TH)`
  text-align: ${(props) => (props.center ? 'center' : '')};

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }

  @media (min-width: 750px) {
    padding: 0.5rem 1rem;
  }
`;
