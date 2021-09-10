import styled from 'styled-components';
import { theme } from '../theme';

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.3;

  @media (min-width: 750px) {
    font-size: 2.5rem;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 1.3;

  @media (min-width: 750px) {
    font-size: 2rem;
  }
`;

export const H3 = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media (min-width: 750px) {
    font-size: 1.75rem;
  }
`;

export const Nav = styled.nav``;

export const Button = styled.button`
  font-family: inherit;
  border: none;
  border-radius: 5px;
  transition: opacity 0.1s ease-in-out;
  min-height: 28px;
  display: block;
  user-select: none;

  &:hover,
  &:active {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const AuthButton = styled(Button)`
  width: 100%;
  background-color: ${theme.color.accent};
  font-weight: 900;
  font-size: 0.75rem;
  padding: 0.5rem 0;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Form = styled.form`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 700;
  font-size: 0.75rem;
`;

export const ModalWrapper = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 5% auto 15% auto;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  width: 95%;
  max-width: 500px;
  border-radius: 10px;

  @media (min-width: 650px) {
    width: 75%;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  text-transform: capitalize;
  font-weight: 700;
  width: 100%;
  padding: 0.2rem 0.25rem;
  border: 1px solid transparent;
  border-bottom: 1px solid ${theme.color.dark};
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    border-bottom: 1px solid transparent;
  }
`;

export const AuthInput = styled(Input)`
  text-transform: none;
`;

export const Select = styled.select`
  font-family: inherit;
  font-weight: 700;
  width: 100%;
  padding: 0.25rem 0;
  border: 1px solid transparent;
  border-bottom: 1px solid ${theme.color.dark};
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const Table = styled.table`
  text-transform: capitalize;
  margin: 0 auto;
  border-collapse: collapse;
  /* white-space: nowrap; */
  font-size: 0.9rem;
  width: 100%;

  @media (min-width: 650px) {
    width: 75%;
  }
`;

export const THead = styled.thead`
  text-align: left;
  user-select: none;
`;

export const TH = styled.th`
  padding: 0;
  margin: 0;
`;

export const TD = styled.td`
  padding: 0;
  margin: 0;
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  display: block;
  padding: 0 0.1rem;
  margin: 0 auto;
  font-size: 0.75rem;
  font-weight: 900;
`;
