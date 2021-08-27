import styled from 'styled-components';
import { Table, THead, TH } from '../../shared/globals';
import { theme } from '../../shared/theme';

export const Span = styled.span`
  position: absolute;
`;

export const IngredientTable = styled(Table)`
  width: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const IngredientTHead = styled(THead)`
  background-color: ${theme.color.accent};
`;

export const IngredientTH = styled(TH)`
  text-align: ${(props) => (props.center ? 'center' : '')};

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }
`;
