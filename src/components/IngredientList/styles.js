import styled from 'styled-components';
import { Table, THead, TH } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const Span = styled.span`
  position: absolute;
`;

export const IngredientTable = styled(Table)`
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;

  @media (min-width: 750px) {
    border-radius: 10px 10px 0 0;
    margin: 1rem auto;
  }
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
