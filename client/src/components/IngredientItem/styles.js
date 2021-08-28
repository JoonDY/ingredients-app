import styled from 'styled-components';
import { TD, Button } from '../../shared/globals';

export const IngredientTD = styled(TD)`
  text-align: ${(props) => (props.center ? 'center' : '')};

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }
`;

export const IngredientTR = styled.tr`
  border-bottom: 1px solid #d3d3d3;
`;

export const UpdateButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
  font-size: 1rem;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    opacity: 0.75;
  }
`;
export const DeleteButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #eb4034;
  color: white;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    opacity: 0.5;
  }
`;
