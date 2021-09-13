import styled from 'styled-components';
import { TD, Button } from '../../shared/globals';

export const IngredientTR = styled.tr`
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 0.6rem;
  padding: 0.5rem 1.5rem 0.5rem 2rem;

  @media (min-width: 750px) {
    display: table-row;
  }
`;

export const NameTD = styled(TD)`
  text-align: ${(props) => (props.center ? 'center' : '')};
  display: block;
  width: 30%;

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }

  @media (min-width: 750px) {
    display: revert;
    padding: 0.25rem 1rem;
  }
`;

export const CategoryTD = styled(TD)`
  text-align: ${(props) => (props.center ? 'center' : '')};
  display: none;

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }

  @media (min-width: 750px) {
    display: revert;
    padding: 0.25rem 1rem;
  }
`;

export const StockTD = styled(TD)`
  text-align: ${(props) => (props.center ? 'center' : '')};
  display: block;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }

  @media (min-width: 750px) {
    position: static;
    transform: none;
    display: revert;
    padding: 0.25rem 0;
  }
`;

export const PriorityTD = styled(TD)`
  text-align: ${(props) => (props.center ? 'center' : '')};
  display: block;
  width: 5%;

  &:hover {
    cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  }

  @media (min-width: 750px) {
    display: revert;
    padding: 0.25rem 1rem;
  }
`;

export const ButtonTD = styled(TD)`
  text-align: ${(props) => (props.center ? 'center' : '')};
  display: block;
  width: 30%;

  @media (min-width: 750px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 1rem;
  }
`;

export const UpdateButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
  font-size: 1rem;
  margin-right: 0.5rem;
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

export const ButtonContainer = styled.div`
  width: 100%;
`;
