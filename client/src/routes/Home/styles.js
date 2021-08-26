import styled from 'styled-components';
import { theme } from '../../shared/theme';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
  background-color: ${theme.color.white};

  @media (max-width: 750px) {
    width: 95%;
  }
`;
