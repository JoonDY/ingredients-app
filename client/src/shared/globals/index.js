import styled from 'styled-components';
import { theme } from '../theme';

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.3;
`;

export const H2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
`;

export const Button = styled.button`
  font-family: inherit;
  border: none;
  border-radius: 5px;
  transition: opacity 0.1s ease-in-out;
  min-height: 28px;
  display: block;

  &:hover,
  &:active {
    opacity: 0.8;
    color: ${theme.color.dark};
    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 700;
  font-size: .75rem;
}
`;

export const ModalWrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 10% auto 15% auto;
  width: 35%;
  padding: 2rem;
  border-radius: 10px;
`;

export const Input = styled.input`
  font-family: inherit;
  font-weight: 700;
  width: 100%;
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-bottom: 1px solid ${theme.color.dark};
`;

export const Select = styled.select`
  font-family: inherit;
  font-weight: 700;
  width: 100%;
  padding: 0.5rem 0.25rem 0.25rem 0.25rem;
  margin: 1rem 0;
  border: none;
  border-bottom: 1px solid ${theme.color.dark};
`;
