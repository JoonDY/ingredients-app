import styled from 'styled-components';
import { theme } from '../../shared/theme';
import { H1, Nav } from '../../shared/globals';

export const HeaderContainer = styled.header`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  border-bottom: 2px solid ${theme.color.accent};

  @media (min-width: 1500px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const TitleH1 = styled(H1)`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 1500px) {
    font-size: 2rem;
    margin-bottom: -0.3rem;
  }
`;

export const HeaderNav = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;

  @media (min-width: 1500px) {
    justify-content: flex-end;
  }
`;

export const UL = styled.ul`
  font-size: 0.7rem;
`;

export const LI = styled.li`
  margin: 0 0.5rem;

  @media (min-width: 1500px) {
    margin-left: 1rem;
  }
`;
