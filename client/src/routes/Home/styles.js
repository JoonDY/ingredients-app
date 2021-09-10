import styled from 'styled-components';
import { theme } from '../../shared/theme';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  max-width: 1100px;
  background-color: ${theme.color.white};

  @media (max-width: 750px) {
    width: 100%;
  }
`;
